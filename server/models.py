from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, DateTime
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin




from config import db

class User(db.Model, SerializerMixin):
    __tablename__ ='users'
    serialize_rules= ("-created_at", "-updated_at", "-reviews",)
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)