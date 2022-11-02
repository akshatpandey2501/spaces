import React, { useState } from "react";
import Searchsvg from "../images/search.svg"
import Infosvg from "../images/info.svg"
import Homesvg from "../images/home1.svg"
import Helpsvg from "../images/help-circle.svg"
import Popularsvg from "../images/popular.svg"
import Arrowsvg from "../images/arrow1.svg"
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
function Sidebar(){
    const[search,setSearch]=useState("")
    const handleSearch=e=>{
           setSearch(e.target.value)
    }
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
            <img src={Searchsvg} alt="search" className="searchicon" /><input type="text" id="search" className="search" onChange={handleSearch} value={search} placeholder="Search" />
         <ul>
            <li> <img src={Homesvg} alt="home" className="homeicon" /><p className="home1">Home</p></li>
            <li> <img src={Helpsvg} alt="help" className="helpicon" /><p className="help">Help and Support</p></li>
            <li> <img src={Infosvg} alt="info" className="infoicon" /><p className="info">About</p></li>
            <li> <img src={Popularsvg} alt="popular" className="popularicon" /><p className="popular">Popular Subspaces</p> <img src={Arrowsvg} alt="arrow" className="arrowicon" /></li>
            <button className="loginbuttonside" onClick={Buttionaction1}><p className="logintextside">Log In</p></button>
            <button className="signupbuttonside" onClick={Buttionaction2}><p className="signuptextside">Sign up</p></button>
         </ul>
        </div>
    )
}
export default Sidebar;