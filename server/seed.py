from app import app
from models import db, User, Review, Salon

with app.app_context():

  u1=User(username= "bill", _password_hash = "1234", email = "bill@example.com" )
  u2=User(username= "ted", _password_hash = "1234", email = "ted@example.com" )
  u3=User(username= "sue", _password_hash = "1234", email = "sue@example.com" )
  u4=User(username= "beth", _password_hash = "1234", email = "beth@example.com", admin = "true" )
  

 
 
  users = [u1, u2, u3, u4]

  s1=Salon(name = "The Loreal", location = "Queens, NY", contact = "212-999-5608",image = "https://www.globalcosmeticsnews.com/wp-content/uploads/2020/04/Loreal_Salon.jpg")
  s2=Salon(name = "The Aveda", location = "Brooklyn, NY", contact = "rerservations@aveda.com", image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/34/c9/38/getlstd-property-photo.jpg?w=1200&h=-1&s=1")
  s3=Salon(name = "The Olaplex", location = "Manhattan, NY", contact = "olalpex.com/reservations", image="https://livetruelondon.com/wp-content/uploads/2019/01/Olaplex-London-London-Olaplex-Olaplex-Olaplex-in-Londo-Live-True-London-Salon-hair-salons-in-London-Top-London-Salons.jpg")
  s4=Salon(name = "The Amika", location = "Manhattan, NY", contact = "347-789-1011", image="https://static01.nyt.com/images/2013/06/06/garden/06ROOMS_SPAN/06CURR3-superJumbo.jpg")
  s5=Salon(name = "The Redkin", location = "Manhattan, NY", contact = "212-555-9874",image = "https://www.redken.com/-/media/project/loreal/brand-sites/redken/americas/us_us/professional/business/salon-interior-and-display/rprobizsaloninteriordisplayheroimg.jpg?sc_lang=en-us&h=610&w=992&rev=f54360bc57e347dfbf35ff083cd21dfd")
  s6=Salon(name = "The Davines", location = "Brooklyn, NY", contact = "754-890-5623",image = "https://images.squarespace-cdn.com/content/v1/56a18f4f9cadb631294ea493/1497710908624-H6DXI5OBYWGYNPAPIFB8/TripleCrownSalon+Clinton+Hill+Brooklyn?format=1000w")
  s7=Salon(name = "Cost Cutters", location = "Staten Island", contact = "212-666-9999", image = "https://sf.ezoiccdn.com/ezoimgfmt/www.salonrates.com/wp-content/uploads/2018/12/cost-cutters-salon.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2")
  salons = [s1, s2, s3, s4, s5, s6, s7]

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