import Home from "./Home"
import Reviews from "./Reviews";
import Salons from "./Salons";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5555/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }else{
        setUser(null)
      
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    fetch("http://localhost:5555/logout", {
    method: "DELETE",
    }).then(() => setUser(null));
    navigate("/")

  }


  return (
    <div >
      <header>
        <h1>Reviewer</h1>
        {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h4>p</h4>
        // <Link to="/">Click Here to Login</Link>
      )}
      </header>
      <NavBar />
      <Routes>

        <Route exact path="/" >
        <Route index element={<Home user={user} onLogin={handleLogin}/>}/>
        </Route>
       
        <Route exact path="/Reviews">
         <Route index element={<Reviews />}/>
        </Route>

        <Route exact path="/Salons">
        <Route index element={<Salons />}/>
        </Route>
      
      </Routes>
    </div>
  
  );
}

export default App;
