import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import Loginsvg from "../images/welcome back.svg"
import { Link } from "react-router-dom";
function Login(){
    
    const[email,setLogin] = useState("");
    const[password,setPassword]=useState("")
    const handleChange = event =>{
      setLogin(event.target.value);
   };
   const handleChange1 = event =>{
    setPassword(event.target.value);
 };
 var info={email:email,password:password};
    const Buttionaction1=e=>{
        e.preventDefault();
        setLogin("")
        setPassword("")
         axios.post('https://spacesback-production.up.railway.app/login',info).then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
       }
    return(
        <div className="login">
         <img className="loginimg1" src={Loginsvg} alt="login img"/>
         <p className="welcomeback">Welcome Back</p> 
         <p className="details1">Enter your details</p>
         <input type="text" id="emaiid" placeholder="Email id" className="email" value={email} onChange={handleChange}/>
         <input type="password" id="password" placeholder="Password" className="pass" value={password} onChange={handleChange1} />
         <p className="forgot"><Link to="/Forgot" style={{ textDecoration: 'none',color:'black'}}>Forgot Password?</Link></p>
         <button className="loginbutton" onClick={Buttionaction1}><p className="logintext">Log In</p></button>
         <p className="byclicking">By clicking on Login, I accept the <b>Terms & Conditions</b> &<b> Privacy Policy</b></p>
         <p className="createacc"><Link to="/Signup" style={{ textDecoration: 'none',color:'black'}}>CREATE ACCOUNT</Link></p>
        </div>
    );
}
export default Login;