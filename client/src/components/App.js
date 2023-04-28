import Home from "./Home"
import Reviews from "./Reviews";
import Salons from "./Salons";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";




function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  return (
    <div >
      <header>
        <h1>Reviewer</h1>
        {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
    
        </div>
      ) : (
        <h4></h4>
     
      )}
      </header>
      <NavBar user={user} setUser={setUser}/>
      <main>
      {user ? (
      <Routes>

        <Route exact path="/" >
        <Route index element={<Home user={user} />}/>
        </Route>
       
        <Route exact path="/Reviews">
         <Route index element={<Reviews />}/>
        </Route>

        <Route exact path="/Salons">
        <Route index element={<Salons />}/>
        </Route>
      
      </Routes>
      ) : (
        <Routes>
          <Route exact path="/signup">
         <Route index element={<SignUp setUser={setUser}/>}/>
        </Route>
        <Route exact path="/Login">
         <Route index element={<Login user ={user} setUser={setUser}/>}/>
        </Route>
        <Route exact path="/" >
        <Route index element={<Home user={user} />}/>
        </Route>

        </Routes>
      )}
      </main>
    </div>
  
  );
}

export default App;
