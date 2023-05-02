
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser} = useContext(UserContext);
  
    function handleSubmit(e) {
      
      e.preventDefault();
      fetch("http://localhost:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }
  
    return (
       <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>

      </> 
    );
  }
  
  export default Login;
  