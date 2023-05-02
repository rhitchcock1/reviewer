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
        
        }
        return <h1>Please Login or Sign Up</h1>;
      
      }
