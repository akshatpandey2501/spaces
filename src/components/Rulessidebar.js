import React from "react";
import Pointersvg from "../images/Points.svg"
import { Link } from "react-router-dom"
import "./rulessidebar.css"
function Rulessidebar(){
    return(
        <div className="rulessidebar">
            <p className="rulesside">Rules</p>
            <img className="rulesPointer1" src={Pointersvg} alt="login img"/><p className="rulepoint1">Remember The Human</p>
         <img className="rulesPointer2" src={Pointersvg} alt="login img"/><p className="rulepoint2">Behave like you would in real life</p>
         <img className="rulesPointer3" src={Pointersvg} alt="login img"/><p className="rulepoint3">Look for the original source of content.
</p>
         <img className="rulesPointer4" src={Pointersvg} alt="login img"/><p className="rulepoint4">Search for duplicates before posting.</p>
         <img className="rulesPointer5" src={Pointersvg} alt="login img"/><p className="rulepoint5">Read the community's rules</p>
     
        <p className="topcommprivacy"><Link to="/Privacypolicy" style={{ textDecoration: 'none',color:'black'}}>Privacy Policy</Link></p>
        <p className="topcommagreement"><Link to="/Contentpolicy" style={{ textDecoration: 'none',color:'black'}}>Content Policy</Link></p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
        </div>
    )
}
export default Rulessidebar;