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

function App(){
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
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Forgot" element={<Forgot/>}/>
            
            <Route path="/Otp" element={<Otp/>} />
            <Route path="/Otp1" element={<Otp1/>} />
            <Route path="/Reset" element={<Reset/>} />
            <Route path="/Success" element={<Success/>} />
            <Route path="/Explore" element={<Explore/>} />
            <Route path="/Userlogin" element={<Userloginpage/>}/>
            <Route path="/Subspacecreated" element={<Subspacecreated/>}/>
            <Route path="/Privacypolicy" element={<Privacyandpolicy/>}/>
            <Route path="/Contentpolicy" element={<Contentpolicy/>}/>
            <Route path="/Topcommunities" element={<Viewtopcomm/>}/>
            <Route path="/Createspace" element={<Createspace/>}/>
            <Route path="/Createpost" element={<Createpost/>}/>
            <Route path="/Showpost" element={<Showpost/>}/>
            <Route path="/Changeprofile" element={<Changeprofile/>}/>
        </Routes>
        
        </div>
    );
}
export default App;