import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import "./components/nav.css";
import Otp from "./components/Otp";
import Otp1 from "./components/Otp1";
import Reset from "./components/Reset";
import Success from "./components/Success";
import Explore from "./components/Explore"
import Userloginpage from "./components/Userloginpage";
import Subspacecreated from "./components/Subspacecreated";
import Privacyandpolicy from "./components/Privacypolicy";
import Contentpolicy from "./components/Contentpolicy";
import Viewtopcomm from "./components/Viewtopcomm";
import Createspace from "./components/Createspace";
import Createpost from "./components/Createpost";
import Showpost from "./components/Showpost";
import Changeprofile from "./components/Changeprofile";
import Showprofile from "./components/Showuser";
import Showuser from "./components/Showuser";

function App(){
    var signup=sessionStorage.getItem("otpnavigate")
    var login=sessionStorage.getItem("userloggedin")
    var otp1=sessionStorage.getItem("otp1route")
    return(
       <div>
         {/* <div className="navbar">
            <p className="appname">SPACES</p>
            <ul>
            <li><Link to="/" style={{ textDecoration: 'none',color:'black' }}>Home</Link> </li>
            <li><Link to="/Signup" style={{ textDecoration: 'none',color:'black' }}>Sign up</Link> </li>
            <li><Link to="/Login" style={{ textDecoration: 'none',color:'black' }} >Login</Link> </li>
            </ul>
           
        </div> */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Forgot" element={<Forgot/>}/>
            
            {signup?(<Route path="/Otp" element={<Otp/>}/>) :(null)}
            {otp1?(<Route path="/Otp1" element={<Otp1/>} />):(null)}
            <Route path="/Reset" element={<Reset/>} />
            <Route path="/Success" element={<Success/>} />
            <Route path="/Explore" element={<Explore/>} />
           {login?(<Route path="/Userlogin" element={<Userloginpage/>}/>):(null)}
           {login?(<Route path="/Subspacecreated" element={<Subspacecreated/>}/>):(null)}
           {login?(<Route path="/Privacypolicy" element={<Privacyandpolicy/>}/>):(null)}
           {login?(<Route path="/Privacypolicy" element={<Privacyandpolicy/>}/>):(null)}
           {login?(<Route path="/Contentpolicy" element={<Contentpolicy/>}/>):(null)}
           {login?(<Route path="/Topcommunities" element={<Viewtopcomm/>}/>):(null)}
           {login?(<Route path="/Createspace" element={<Createspace/>}/>):(null)}
           {login?(<Route path="/Createpost" element={<Createpost/>}/>):(null)}
           {login?(<Route path="/Showpost" element={<Showpost/>}/>):(null)}
           {login?(<Route path="/Changeprofile" element={<Changeprofile/>}/>):(null)}
           {login?(<Route path="/Showuser" element={<Showuser/>}/>):(null)}
        </Routes>
        
        </div>
    );
}
export default App;