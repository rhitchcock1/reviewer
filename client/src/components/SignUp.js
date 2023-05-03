import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function SignUp() {
  const { user, setUser} = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // const [admin, setAdmin] = useState("");

  const [_password_hash, setPasswordhash] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {

    
    e.preventDefault();
    fetch("http://localhost:5555/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        _password_hash,
        admin : false,
  
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label className="text-xl text-white mx-4" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <label className="text-xl text-white mx-4" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         
        />
        <label className="text-xl text-white mx-4" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={_password_hash}
          onChange={(e) => setPasswordhash(e.target.value)}
          autoComplete="current-password"
        />
        <label className="text-xl text-white mx-4" htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button className=" bg-[#720E07] w-[200px] rounded-md font-medium my-2 mx-4 py-2 " type="submit">Sign Up</button>
   
      </form>
    </div>
  );
}

export default SignUp;