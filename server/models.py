# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import MetaData, DateTime
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from flask_bcrypt import Bcrypt
# from app import app, db
# # from app import bcrypt
# bcrypt = Bcrypt(app)
from config import db

class User(db.Model, SerializerMixin):
    __tablename__ ='users'
    serialize_rules= ("-reviews"),
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    reviews= db.relationship("Review", backref="user")
    salons= association_proxy("reviews", "salon")

    def __repr__(self):
        return f'User {self.username}, ID {self.id}'

    # @hybrid_property
    # def password_hash(self):
    #     return self._password_hash

    # @password_hash.setter
    # def password_hash(self, password):
    #     # utf-8 encoding and decoding is required in python 3
    #     password_hash = bcrypt.generate_password_hash(
    #         password.encode('utf-8'))
    #     self._password_hash = password_hash.decode('utf-8')

    # def authenticate(self, password):
    #     return bcrypt.check_password_hash(
    #         self._password_hash, password.encode('utf-8'))

class Salon(db.Model, SerializerMixin):
    __tablename__ = "salons"
    serialize_rules = ("-reviews",)
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)
    location = db.Column(db.String)
    reviews= db.relationship("Review", backref="salon")
    users= association_proxy("reviews", "user")
    @validates ("name")
    def validate_name(self, key, value):
        if not value:
            raise ValueError("must have Salon Name attribute")
        return value

class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"
    serialize_rules = ( )
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, )
    rating = db.Column(db.Integer, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    salon_id = db.Column(db.Integer, db.ForeignKey("salons.id"))
    @validates("rating")
    def validate_rating(self, key, value):
        if 1 <= int(value) <= 5 :
            return value
        raise ValueError("rating must be between 1 and 5")
