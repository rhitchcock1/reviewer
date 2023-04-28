import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Home({user, onLogin, onLogout}){

    // const [username, setUsername] = useState("");

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch("http://localhost:5555/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username }),
    //   })
    //     .then((r) => r.json())
    //     .then((user) => onLogin(user));
    // }
   
    return (
      function Home({ user }) {
        if (user) {
          return <h1>Welcome, {user.username}!</h1>;
        } else {
          return <h1>Please Login or Sign Up</h1>;
        }
      }
    );
  }