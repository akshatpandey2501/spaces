import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <div className="navbar">
            <p className="appname">SPACES</p>
            <ul>
            <li><Link to="/" style={{ textDecoration: 'none',color:'black' }}>Home</Link> </li>
            <li><Link to="/Signup" style={{ textDecoration: 'none',color:'black' }}>Sign up</Link> </li>
            <li><Link to="/Login" style={{ textDecoration: 'none',color:'black' }} >Login</Link> </li>
            </ul>
           
        </div>
    )
}
export default Nav;