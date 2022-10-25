import React from "react";
import { useState } from "react";
import "./login.css";
import Loginsvg from "../images/welcome back.svg"
function Login(){
    const[login,setLogin] = useState("");
    const[Password,setPassword]=useState("")
    const handleChange = event =>{
      setLogin(event.target.value);
   };
   const handleChange1 = event =>{
    setPassword(event.target.value);
 };
    const Buttionaction1=e=>{
        e.preventDefault();
        setLogin("")
        setPassword("")
       }
    return(
        <div className="login">
         <img className="loginimage" src={Loginsvg} alt="login img"/>
         <p className="welcomeback">Welcome Back</p> 
         <p className="details1">Enter your details</p>
         <input type="text" id="emaiid" placeholder="Email id" className="email" value={login} onChange={handleChange}/>
         <input type="password" id="password" placeholder="Password" className="pass" value={Password} onChange={handleChange1} />
         <p className="forgot">Forgot Password?</p>
         <button className="loginbutton" onClick={Buttionaction1}><p className="logintext">Log In</p></button>
         <p className="byclicking">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
         <p className="createacc">CREATE ACCOUNT</p>
        </div>
    );
}
export default Login;