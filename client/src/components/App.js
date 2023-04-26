import Home from "./Home"
import Reviews from "./Reviews";
import Salons from "./Salons";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div >
      <header>
        <h1>Reviewer</h1>
      </header>
      <NavBar />
      <Routes>

        <Route exact path="/" >
        <Route index element={<Home />}/>
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
