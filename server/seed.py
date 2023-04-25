# from app import app
# from models import db, Restaurant, User, Review

# with app.app_context():

#   u3= User(username = "Tim", location= "Virginia")
#     users = [u1, u2, u3]


# if __name__ == '__main__':
#     # fake = Faker()
#     with app.app_context():
#         Restaurant.query.delete()
#         User.query.delete()
#         Review.query.delete()
#         print("Starting seed...")
#         db.session.add_all(restaraunts)
#         db.session.add_all(users)
#         db.session.add_all(reviews)
#         db.session.commit()