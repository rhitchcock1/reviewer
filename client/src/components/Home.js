import React, {useContext} from "react";
import { UserContext } from "../context/user";



export default function Home() {
  const { user} = useContext(UserContext);


        if (user) {
         
          return(
          <div className = "reviewCard">
           <h1>Welcome, {user.username}!</h1>
           <h1>Your Reviews</h1>
           <h1>{user.reviews?.map((review) => (
            <div>
            <h2>Review:{review.content}</h2>
            <h2>Rating:{review.rating}</h2>
            <h2>Salon:{review.salon.name}</h2>
            <img src ={review.image} alt = {review.content} />
            <h3>{review.created_at}</h3>
            </div>
           ))}</h1>
     
          </div>
          )
        
        }
        return <h1>Please Login or Sign Up</h1>;
      
      }
      
