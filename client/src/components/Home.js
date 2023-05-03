import React, {useContext} from "react";
import { UserContext } from "../context/user";
import Hero from "./Hero"



export default function Home() {
  const { user} = useContext(UserContext);


        if (user) {
         
          return(
            <div className="w-full bg-white py-16 px-4">
               <h1 className="text-5xl text-[#8A1108] font-bold text-center uppercase pb-4">Welcome, {user.username}!</h1>
             <h2 className= "text-3xl font-bold text-center uppercase">Your Reviews</h2>
            < div className = "max-w-[900px] mx-auto py-10 px-20  ">
            <div className="w-full pb-3 px-2 py-2 shadow-2xl rounded-lg hover:scale-110 duration-300">
         
       
             <div>{user.reviews?.map((review) => (
              <div>
                 <h2>Salon:{review.salon.name}</h2>
              <h2>Review:{review.content}</h2>
              <h2>Rating:{review.rating}</h2>
            
             <img className="" src ={review.image} alt = {review.content} />
              <h3>{review.created_at}</h3>
              </div>
              
               ))}</div>
              
            </div>
          </div>
          </div>
      
          )
        }
        return (
          <div>
           <Hero />
        </div>

        )
      
      }
      
