import React from "react";
import "./login.css";
import Loginsvg from "../images/welcome back.svg"
function Login(){
    return(
        <div className="login">
         <img className="loginimage" src={Loginsvg} alt="login img"/>
         <p className="welcomeback">Welcome Back</p> 
         <p className="details1">Enter your details</p>
         <input type="text" id="emaiid" placeholder="Email id" className="email" />
         <input type="password" id="password" placeholder="Password" className="pass" />
         <p className="forgot">Forgot Password?</p>
         <button className="loginbutton"><p className="logintext">Log In</p></button>
         <p className="byclicking">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
         <p className="createacc">CREATE ACCOUNT</p>
        </div>
    );
}
export default Login;