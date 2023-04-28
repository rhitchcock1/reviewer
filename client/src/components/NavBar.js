import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "red",
  textDecoration: "none",
  color: "black",
};

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("http://localhost:5555/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

 

  return (
    <div>
      <NavLink
        to="/"
        exact
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
          exact
          style={linkStyles}
        
        >
          Reviews
        </NavLink>
  
        <NavLink
          to="/salons"
          exact
          style={linkStyles}
         
        >
          Salons
        </NavLink>
          </div>
        ) : (
          <>
                 <NavLink
        to="/signup"
        exact
        style={linkStyles}
     
      >
        SignUp
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
     
      >
        Login
      </NavLink>
            {/* <Link to="/signup">Signup</Link> */}
            {/* <Link to="/login">Login</Link> */}
          </>
        )}
      </div>
      {/* <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
          background: "pink",
        }}
      >
        Reviews
      </NavLink>

      <NavLink
        to="/salons"
        exact
        style={linkStyles}
        activeStyle={{
          background: "pink" ,
        }}
      >
        Salons
      </NavLink> */}


    </div>
  );
}

export default NavBar;