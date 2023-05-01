import Home from "./Home"
import Reviews from "./Reviews";
import Salons from "./Salons";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Login from "./Login";
// import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { UserContext} from "../context/user";




function App() {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate()
 useEffect(() => {
  fetchUser()
 }, [])
  const fetchUser = () => {
    fetch(`http://localhost:5555/check_session`, {
      mode: 'no-cors',
      credentials: 'include',
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
   })
    .then(res => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });

  }
  
  return (
    <div >
         <UserContext.Provider value={{ user, setUser }}>
      <header>
        <h1>Reviewer</h1>
        {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
         
      ) : (
        <h4>!</h4>
     
      )}
      </header>
      <NavBar user={user} setUser={setUser}/>
      <main>
      {user ? (
       
      <Routes>

        <Route path="/" >
        <Route index element={<Home user={user} />}/>
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
         <Route index element={<SignUp setUser={setUser}/>}/>
        </Route>
        <Route path="/Login">
         <Route index element={<Login user ={user} setUser={setUser}/>}/>
        </Route>
        <Route path="/" >
        <Route index element={<Home user={user} />}/>
        </Route>

        </Routes>
       )}
      </main>
      </UserContext.Provider>
    </div>
  
  );
}

export default App;
