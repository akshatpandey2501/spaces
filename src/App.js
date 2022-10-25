import React from "react";
import { Route,Routes,Link } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./components/nav.css";

function App(){
    return(
       <div>
         <div className="navbar">
            <p className="appname">SPACES</p>
            <ul>
            <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link> </li>
            <li><Link to="/Signup" style={{ textDecoration: 'none' }}>Sign up</Link> </li>
            <li><Link to="/Login" style={{ textDecoration: 'none' }} >Login</Link> </li>
            </ul>
           
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
        </Routes>
        
        </div>
    );
}
export default App;