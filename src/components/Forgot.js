import React, { useState } from "react"
import "./forgot.css";
import axios from "axios";
import Loginsvg from "../images/welcome back.svg"

import Otp1 from "./Otp1";
function Forgot(){
    const[forgoterror,setForgotError]=useState(false)
    const[forgotemail,setForgot]=useState("")
    var forgotinfo={email:forgotemail}
    const forgotChange=e=>{
        setForgot(e.target.value);
    }
    const handleClicking=event=>{
        event.preventDefault()
        localStorage.setItem("forgote",forgotemail)
        axios.post('https://spacesback-production.up.railway.app/forgotpassword',forgotinfo).then((res) => {
            console.log(res);
            console.log()
           
            if (res.status === 200) {
             
             setForgotError(true)
            } 
          })
          .catch((err) => {
            console.log(err);
         
          })
    }

    return(<>
       {forgoterror?(<Otp1/>):(
        <div className="forgotpass">
        <img className="loginimg" src={Loginsvg} alt="login img"/>  
        <p className="forgot1">Forgot Password?</p> 
        <p className="send">We'll send you a OTP on this email</p>
        <input type="text" id="emaiid" placeholder="Email id" className="giveemail" onChange={forgotChange} value={forgotemail} />
        <button className="forgotbutton" onClick={handleClicking} ><p className="forgottext">Continue</p></button>
        </div>
       )}
       </>
    );
}
export default Forgot;