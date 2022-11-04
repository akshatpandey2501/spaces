import React from "react";
import "./home.css";
import Nav from "../Nav";
import Homesvg from "../images/home.svg"
import { Link } from "react-router-dom";
function Home (){
    return(
        <div className="home"><Nav/>
            <img src={Homesvg} className="imagehome"  alt="home"/>         
            <div> <p className="welcome">Welcome To Spaces</p></div>
           <div><p className="grow">A place where ideas grow</p></div>
           <div className="explore-box"><p className="explore">Let's Explore</p></div>
           <div><p className="communities">Top Communities</p></div>
           <div className="ask-box"><p className="ask">AskSpaces</p></div>
           <div className="football-box"><p className="football">Football</p></div>
           <div className="leagueoflegens-box"><p className="leagueoflegens">Leagueoflegends</p></div>
           <div className="marvel-box"><p className="marvel">MarvelStudios</p></div>
           <div className="minecraft-bax"><p className="minecraft">Minecraft</p></div>
           
           <div className="travel-box"><p className="travel">Bodybuilding</p></div>
           <div className="esport-box"><p className="esport">Esports</p></div>
           
           <div className="robotics-box"><p className="robotics">Robotics</p></div>
           <div className="running-box"><p className="running">Running</p></div>
           <div className="formula-box"><p className="formula">Formula1</p></div>
           <div className="login-box"><p className="login1"><Link to="/Login"  style={{ textDecoration: 'none',color:'black'}} >Login</Link></p></div>
           <p className="already">Don’t have an account? <Link to="/Signup" style={{ textDecoration: 'none',color:'black'}}>SIGN UP</Link></p>
           
        </div>
    );
}
export default Home;