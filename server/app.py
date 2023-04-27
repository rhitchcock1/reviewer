# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
from flask import Flask
# from flask_bcrypt import Bcrypt

# Local imports
from config import app, db, api
from models import User,Salon, Review
# bcrypt = Bcrypt(app)
# from models import User, Restaurant, Review

# Views go here!
# @app.before_request
# def check_if_logged_in():
#     open_access_list = [
#         'clear',
#         # "salon_list",
#         # "review_list",
#         'login',
#         'logout',
#         'check_session'
#     ]
#     if (request.endpoint) not in open_access_list and (not session.get('user_id')):
#         return {'error': '401 Unauthorized'}, 401
    
@app.route('/')
def index():
    return '<h1>Home</h1>'

class Users(Resource):
    def get(self):
        user_list = [u.to_dict() for u in User.query.all()]
        if user_list == None:
            return make_response({"error":"user not found"}, 404)
        return make_response(user_list, 200)
    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                name= data["name"],
                username=data["username"],
                _password_hash=data["password_hash"],
            )
        except ValueError:
            return make_response({"error": "must be valid user"}, 404)
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        return make_response(new_user.to_dict(), 201)

    
api.add_resource(Users, "/users")

class UserById(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        if user is None:
            return make_response({"error": "user not found"}, 404)
        return make_response(user.to_dict(), 200)
api.add_resource(UserById, "/users/<int:id>")

class Salons (Resource):
    def get(self):
        salon_list = [s.to_dict() for s in Salon.query.all()]
        if salon_list == None:
            return make_response({"error":"salon not found"}, 404)
        return make_response(salon_list, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_salon = Salon(
                name = data["name"],
                location = data["location"],
            )
        except ValueError:
            return make_response({"error": "must be valid salon"}, 404)
        db.session.add(new_salon)
        db.session.commit()
        return make_response(new_salon.to_dict(), 201)

  
api.add_resource(Salons, "/salons", endpoint = "salon_list")

class SalonById(Resource):
    def get (self, id):
        salon = Salon.query.filter_by(id = id).first()
        if salon == None:
            return make_response({"error":"salon not found"}, 404)
        return make_response(salon.to_dict(), 200)
    
    def delete(self, id):
        salon = Salon.query.filter_by(id = id).first()
        if salon == None:
            return make_response({"error":"salon not found"}, 404)
        db.session.delete(salon)
        db.session.commit()
        return make_response({"deleted": "she gone"}, 204)
    
api.add_resource(SalonById, "/salons/<int:id>", endpoint="ind_salon")

class Reviews(Resource):
    def get(self):
        review_list = [r.to_dict() for r in Review.query.all()]
        if review_list == None:
            return make_response({"error":"review not found"}, 404)
        return make_response (review_list, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_review = Review (
            content = data['content'],
            rating = data["rating"],
            user_id = data["user_id"],
            salon_id = data["salon_id"],
            )
        except ValueError:
            return make_response({"error": "must be valid review"}, 404)

        db.session.add(new_review)
        db.session.commit()
        return make_response(new_review.to_dict(), 201)
    
api.add_resource(Reviews, "/reviews", endpoint = "review_list")

class ReviewById(Resource):
    def get(self, id):
        review = Review.query.filter_by(id = id).first()
        if review == None:
            return make_response({"error":"review not found"}, 404)
        return make_response(review.to_dict(), 200)
    
    def delete(self, id):
        review = Review.query.filter_by(id = id).first()
        if review == None:
            return make_response({"error":"review not found"}, 404)
        db.session.delete(review)
        db.session.commit()
        return make_response({"deleted": "she gone"}, 204)
    
    def patch(self, id):
        review = Review.query.filter_by(id = id).first()
        data = request.get_json()
        for attr in data:
            setattr(review, attr, data[attr])
        db.session.add(review)
        db.session.commit()
        return make_response(review.to_dict(), 201)
    
api.add_resource(ReviewById, "/reviews/<int:id>", endpoint="ind_review")

class ClearSession(Resource):

    def delete(self):
    
        session['user_id'] = None

        return {}, 204
class Login(Resource):

    def post(self):
        
        username = request.get_json().get('username')
        user = User.query.filter(User.username == username).first()

        if user:
        
            session['user_id'] = user.id
            return make_response( user.to_dict(), 200 )

        return {}, 401

class Logout(Resource):

    def delete(self):

        session['user_id'] = None
        
        return make_response({}, 204)
api.add_resource(Logout, '/logout', endpoint='logout')

class CheckSession(Resource):

    def get(self):
        
        user_id = session['user_id']
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict(), 200
        
        return {}, 401
    
api.add_resource(ClearSession, '/clear', endpoint='clear')
api.add_resource(Login, '/login', endpoint='login')

api.add_resource(CheckSession, '/check_session', endpoint='check_session')
if __name__ == '__main__':
    app.run(port=5555, debug=True)