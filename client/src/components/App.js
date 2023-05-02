import Home from "./Home"
import Reviews from "./Reviews";
import Salons from "./Salons";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Login from "./Login";
import './App.css';
// import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { UserContext} from "../context/user";




function App() {
  const [user, setUser] = useState();
  
 useEffect(() => {
  fetchUser()
 }, )
  const fetchUser = () => {
    fetch(`http://localhost:5555/check_session`, {

   })
    .then(res => {
      if (res.ok) {
        // res.json().then((user) => setUser(user));
        setUser(user);
      }
    } );

  }

  
  return (
    <div >
         <UserContext.Provider value={{ user, setUser }}>
      <header>
        <h1>NYC Salon Reviewer</h1>
        {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
         
      ) : (
        <h4>Log in Or Sign Up to Review Salons</h4>
     
      )}
      </header>
      <NavBar />
      <main>
      {user ? (
       
      <Routes>

        <Route path="/" >
        <Route index element={<Home />}/>
        </Route>
       
        <Route path="/Reviews">
         <Route index element={<Reviews />}/>
        </Route>

        <Route path="/Salons">
        <Route index element={<Salons />}/>
        </Route>
      
      </Routes>
      
      ) : (
      
        <Routes>
          <Route path="/signup">
         <Route index element={<SignUp />}/>
        </Route>
        <Route path="/Login">
         <Route index element={<Login />}/>
        </Route>
        <Route path="/" >
        <Route index element={<Home />}/>
        </Route>

        </Routes>
       )}
      </main>
      </UserContext.Provider>
    </div>
  
  );
}

export default App;
