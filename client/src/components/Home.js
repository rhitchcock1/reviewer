import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Home({user, onLogin, onLogout}){

    const [username, setUsername] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
   
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
     
      </form>
    );
  }