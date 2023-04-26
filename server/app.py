# Remote library imports
from flask import request, make_response
from flask_restful import Resource
from flask import Flask
# from flask_bcrypt import Bcrypt

# Local imports
# from config import app, db, api
from config import app, db
from models import User,Salon, Review
# bcrypt = Bcrypt(app)
# from models import User, Restaurant, Review

# Views go here!
@app.route('/')
def index():
    return '<h1>Home</h1>'

class User(Resource):
    pass

class Salon (Resource):
    pass

class Review(Resource):
    pass


if __name__ == '__main__':
    app.run(port=5555, debug=True)