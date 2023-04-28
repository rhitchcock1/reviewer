
import { createContext } from "react";


export const UserContext = createContext({})





// const UserContext = React.createContext();

// function UserProvider({ children }) {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     // auto-login
//     fetch("http://localhost:5555/check_session").then((r) => {
//       if (r.ok) {
//      r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);
  
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // export { UserContext, UserProvider };
// export const UserContext = createContext({});