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

function NavBar() {
 

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "Pink",
        }}
        
      >
        Home
      </NavLink>
    
      <NavLink
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
      </NavLink>


    </div>
  );
}

export default NavBar;