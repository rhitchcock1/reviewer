import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate()
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
         
         navigate("/")
        }else{
          alert("Incorrect Username or Password")
        }
      });
      
    }
  
    return (
       <div className="flex flex-col justify-center h-screen items-center">
      <div className="w-[310px] h-[410px] flex flex-col justify-between items-center rounded-lg border-2 text-white  ">
        <form 
        className="h-52 w-full p-4 space-y-4"
        onSubmit={handleSubmit}
        >
          <h1 className=" text-[#720E07] text-center md:text-5xl sm:text-2xl font-bold uppercase">Login</h1>
          {/* <label className="text-xl text-white mx-4"  htmlFor="username">Username</label> */}
          <input
          className="inputClass"
          placeholder="Username"
            type="text"
            id="username"
            autoComplete="off"
            value={username.toLowerCase()}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <label  className="text-xl text-white mx-4" htmlFor="password">Password</label> */}
          <input
          className="inputClass"
          placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className=" bg-[#720E07] w-[200px] h-10 rounded-md font-medium m-auto uppercase" type="submit">Login</button>
        <h3 className="cursor-pointer text-decoration-line: underline pb-3" onClick={()=> navigate("/signup")}> Don't have an account, Sign Up here !</h3>
      </div>
      
      </div> 
    );
  }
  
  export default Login;
  