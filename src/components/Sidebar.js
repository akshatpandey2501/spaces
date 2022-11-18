import React, { useState } from "react";
import { Link } from "react-router-dom";
import Infosvg from "../images/info.svg"
import Homesvg from "../images/home1.svg"
import Helpsvg from "../images/help-circle.svg"
import Popularsvg from "../images/popular.svg"
import Arrowsvg from "../images/arrow1.svg"
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
function Sidebar(){
 
    const navigate=useNavigate()
 function Buttionaction1(){
       navigate("/Login")
    }
    function Buttionaction2(){
        navigate("/Signup")
     }
    return(
        <div className="sidebar">
            <p className="spaces">SPACES</p>
            
         <ul>
            <li> <img src={Homesvg} alt="home" className="homeicon" /><p className="home1"><Link to="/Userlogin" style={{ textDecoration: 'none',color:'black'}}>Home</Link></p></li>
            </ul>
            <button className="loginbuttonside" onClick={Buttionaction1}><p className="logintextside"><Link to="/Login" style={{ textDecoration: 'none',color:'black'}}>Log In</Link></p></button>
            <button className="signupbuttonside" onClick={Buttionaction2}><p className="signuptextside"><Link to="/Login" style={{ textDecoration: 'none',color:'black'}}>Sign up</Link></p></button>
       
          <div className="firstline12"></div>

        </div>
    )
}
export default Sidebar;