from app import app
from models import db, Restaurant, User, Review, Salon

with app.app_context():

  u1= User(name= "Tim ", username = "Tim", _password_hash= "1234")
  u2= User(name= "Kim", username = "Kim", _password_hash= "V5678")
  u3= User(name = "Jim", username = "Jim", _password_hash= "78910")
  users = [u1, u2, u3]

  s1=Salon(name = "Loreal", location = "Queens")
  s2=Salon(name = "Aveda", location = "Brooklyn")
  s3=Salon(name = "Olaplex", location = "Manhattan")
  salons = [s1, s2, s3]

  r1= Review(content = "Amazing", rating = 5, user_id= 1, salon_id=1 )
  r2= Review(content = "just ok", rating = 3, user_id= 2, salon_id= 2)
  r3= Review(content = "crap", rating = 1, user_id= 3, salon_id= 3)
  reviews = [r1, r2, r3]


if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        Salon.query.delete()
        User.query.delete()
        Review.query.delete()
        print("Starting seed...")
        db.session.add_all(salons)
        db.session.add_all(users)
        db.session.add_all(reviews)
        db.session.commit()