import { Routes ,Route} from "react-router-dom";
import "./App.css";
import NavBar  from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isLogedIn,setLogedIn] = useState(false)
  return (
   <div>
     <NavBar isLogedIn = {isLogedIn} setLogedIn = {setLogedIn} />
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login setIsLoggedIn = {setLogedIn}/>}/>
       <Route path="/signup" element={<Signup setIsLoggedIn={setLogedIn}/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
   </div>
  )
}

export default App;
