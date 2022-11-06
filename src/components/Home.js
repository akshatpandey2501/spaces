import React from "react";
import "./home.css";
import Nav from "../Nav";
import Homesvg from "../images/home.svg"
import { Link, useNavigate } from "react-router-dom";
function Home (){
    const navigate=useNavigate()
    function Moveexplore(){
        navigate("/Explore")
    }
    return(
        <div className="home"><Nav/>
            <img src={Homesvg} className="imagehome"  alt="home"/>         
            <div> <p className="welcome">Welcome To Spaces</p></div>
           <div><p className="grow">A place where ideas grow</p></div>
           <button className="explore-box" onClick={Moveexplore}><p className="explore">Let's Explore</p></button>
           <div className="login-box"><p className="login1"><Link to="/Login"  style={{ textDecoration: 'none',color:'black'}} >Login</Link></p></div>
           <p className="already">Don’t have an account? <Link to="/Signup" style={{ textDecoration: 'none',color:'black'}}>SIGN UP</Link></p>
           
        </div>
    );
}
export default Home;