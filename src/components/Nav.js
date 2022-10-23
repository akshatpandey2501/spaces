
import React from "react";
import "./nav.css";
function Nav(){
    return(
        <div className="navbar">
            <p className="appname">SPACES</p>
            <ul>
            <li><link to="/" >Home</link> </li>
            <li><link to="/Signup" >Sign up</link> </li>
            <li><link to="/Login" >Login</link> </li>
            </ul>

        </div>
    );
}
export default Nav;