import React, {useContext} from "react";
import { UserContext } from "../context/user";



export default function Home() {
  const { user} = useContext(UserContext);

        if (user) {
         
          return(
          <div>
           <h1>Welcome, {user.username}!</h1>
           <h1>Your Reviews</h1>
           <h1>{user.reviews?.map((review) => (
            <div>
            <h2>Review:{review.content}</h2>
            <h2>Rating:{review.rating}</h2>
            <h2>Salon:{review.salon_id}</h2>
            <img src ={review.image} alt = {review.content} />
            </div>
           ))}</h1>
     
          </div>
          )
        
        }
        return <h1>Please Login or Sign Up</h1>;
      
      }
