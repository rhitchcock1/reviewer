import React from "react";


export default function Home({ user }) {

        if (user) {
          return <h1>Welcome, {user.username}!</h1>;
        } else {
          return <h1>Please Login or Sign Up</h1>;
        }
      }
