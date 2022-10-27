import React, { useState,useEffect } from "react";
import Loginsvg from "../images/welcome back.svg"
import "./otp.css"
import axios from "axios";

function Otp(){
    const[otp1,setOtp]=useState("")
    const handleChange=e=>{
        setOtp(e.target.value);
    }
    
    var information={email:localStorage.getItem("email"),otp:otp1}

    
    const Clickhandle=event=>{
        event.preventDefault();
        setOtp("")
        axios.post('https://spacesback-production.up.railway.app/signup/verify',information).then((res) => {
          console.log(res);
          console.log(information)
          localStorage.removeItem("email");
        //   if (res.status == 201) {
        //    setUserOtp(true);
        //    setUserError("res.data.msg")
        //   } 
        })
        .catch((err) => {
          console.log(err);
        //   setUserError("res.data.msg")
          // userotp=false;
        })

    }
    const[counter,setCounter]=useState(29)
    useEffect(()=>{
        const timer =
        counter > 0 && setInterval(() => setCounter(counter-1),1000);
        return()=>clearInterval(timer);
    },[counter]);
    var intell2={email:localStorage.getItem("email")}
    const Resendotp=e=>{
        e.preventDefault();
        
        axios.post('https://spacesback-production.up.railway.app/resendotp',intell2).then((res) => {
          console.log(res);
          })
        .catch((err) => {
          console.log(err);
        
        })

    } 
return(
    <div className="otp">
    <img className="otpimg" src={Loginsvg} alt="login img"/>
    <p className="verify">Verification</p> 
    <p className="enterotp">Enter 6 digit OTP send to your EmailID</p>
    <input type="text" maxLength="6" id="otpinput" placeholder="_ _ _ _ _ _" className="otpfield" value={otp1} onChange={handleChange} />
    <button className="resendotp" onClick={Resendotp} disabled={(counter!==0) ? true : false} >Resend Otp?</button><p className="resendtimer">: {counter}</p>
    <button className="verifybutton" onClick={Clickhandle} ><p className="verifytext">Verify</p></button>
    </div>

)
}
export default Otp;