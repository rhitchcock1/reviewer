from app import app
from models import db, User, Review, Salon

with app.app_context():

  u1=User(username= "bill", _password_hash = "1234", email = "bill@example.com" )
  u2=User(username= "ted", _password_hash = "1234", email = "ted@example.com" )
  u3=User(username= "sue", _password_hash = "1234", email = "sue@example.com" )
  u4=User(username= "seth", _password_hash = "1234", email = "beth@example.com", admin = "true" )
  

 
 
  users = [u1, u2, u3, u4]

  s1=Salon(name = "Loreal", location = "Queens", image = "https://www.globalcosmeticsnews.com/wp-content/uploads/2020/04/Loreal_Salon.jpg")
  s2=Salon(name = "Aveda", location = "Brooklyn", image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/34/c9/38/getlstd-property-photo.jpg?w=1200&h=-1&s=1")
  s3=Salon(name = "Olaplex", location = "Manhattan", image ="https://livetruelondon.com/wp-content/uploads/2019/01/Olaplex-London-London-Olaplex-Olaplex-Olaplex-in-Londo-Live-True-London-Salon-hair-salons-in-London-Top-London-Salons.jpg")
  salons = [s1, s2, s3]

  r1= Review(content = "Amazing", rating = 5, image = "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2021/08/1-long-haircut-with-layers-and-highlights-CUfIAwoMmcm.jpg?resize=1043%2C1043&ssl=1", user_id= 1, salon_id=1 )
  r2= Review(content = "just ok", rating = 3, image = "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/05/1-layered-pixie-for-women-over-50.jpg?w=500&ssl=1", user_id= 2, salon_id= 2)
  r3= Review(content = "crap", rating = 1, image = "https://melvinduraicom.files.wordpress.com/2020/05/bad-haircut.jpg",user_id= 3, salon_id= 3)
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