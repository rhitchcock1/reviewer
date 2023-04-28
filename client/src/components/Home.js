import React, {useContext} from "react";
import { UserContext } from "../context/user";
// import IndReview from "./indReviews";


export default function Home() {
  const { user} = useContext(UserContext);


        if (user) {
          // const indReviews = user.reviews.map((indReview) => {
          //   return <IndReview key={indReview.id} review = {indReview}/>
          // })
          return(
          <div>
           <h1>Welcome, {user.username}!</h1>
           <h2>{user.id}</h2>
           <p>{user.reviews}</p>
          </div>
          )
        } else {
          return <h1>Please Login or Sign Up</h1>;
        }
      }
