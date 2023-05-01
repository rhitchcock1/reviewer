import React, {useContext} from "react";
import { UserContext } from "../context/user";



export default function Home() {
  const { user} = useContext(UserContext);

        if (user) {
         
          return(
          <div>
           <h1>Welcome, {user.username}!</h1>
     
          </div>
          )
        // } else if (user.admin === true){
        //   return <h1>Please Login or Sign Up</h1>;
        }
        return <h1>Please Login or Sign Up</h1>;
      
      }
