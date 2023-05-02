import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user";


const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "red",
  textDecoration: "none",
  color: "black",
};

function NavBar() {
  const { user, setUser} = useContext(UserContext);
  
  function handleLogoutClick() {
    fetch("http://localhost:5555/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

 

  return (
    <header className="hheader">
    <div>
      <NavLink
        to="/"
       
        style={linkStyles}
      >
        Home
      </NavLink>
      <div>
        {user ? (
          <div>
          <button  style={linkStyles} onClick={handleLogoutClick}>Logout</button>
          <NavLink
          to="/reviews"
          
          style={linkStyles}
        
        >
          Reviews
        </NavLink>
  
        <NavLink
          to="/salons"
          
          style={linkStyles}
         
        >
          Salons
        </NavLink>
          </div>
        ) : (
          <>
                 <NavLink
        to="/signup"
        
        style={linkStyles}
     
      >
        SignUp
      </NavLink>
      <NavLink
        to="/login"
       
        style={linkStyles}
     
      >
        Login
      </NavLink>
  
          </>
        )}
      </div>
    </div>
  </header>
  );
}

export default NavBar;