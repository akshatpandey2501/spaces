import React, { useEffect, useState } from "react";
import Loginsvg from "../images/welcome back.svg"
import "./otp.css"
import axios from "axios";
import Reset from "./Reset";

function Otp1(){
    const[resetotp,setResetOtp]=useState(false)
    const[otp2,setOtp2]=useState("")
    const handleChange=e=>{
        setOtp2(e.target.value);
    }
    
    var intell={email:localStorage.getItem("forgote"),otp:otp2}

    
    const Clickhandle=event=>{
        event.preventDefault();
        setOtp2("")
        axios.post('https://spacesback-production.up.railway.app/signup/verify',intell).then((res) => {
          console.log(res);
          console.log(intell)
          
          if (res.status === 200) {
            console.log(intell)
         setResetOtp(true)

          }
        })
        .catch((err) => {
          console.log(err);
        
        })
    }
    var intell1={email:localStorage.getItem("forgote")}
    const Resendotp=e=>{
        e.preventDefault();
        
        axios.post('https://spacesback-production.up.railway.app/resendotp',intell1).then((res) => {
          console.log(res);
          if(res.status===200){
            localStorage.removeItem("forgote")
          }
          })
        .catch((err) => {
          console.log(err);
        
        })

    } 
        
        const[counter,setCounter]=useState(29)
        useEffect(()=>{
            const timer =
            counter > 0 && setInterval(() => setCounter(counter-1),1000);
            return()=>clearInterval(timer);
        },[counter]);
  
return(<>
       {resetotp?(<Reset/>):(
    <div className="otp">
    <img className="otpimg" src={Loginsvg} alt="login img"/>
    <p className="verify">Verification</p> 
    <p className="enterotp">Enter 6 digit OTP send to your EmailID</p>
    <input type="text" maxLength="6" id="otpinput" placeholder="_ _ _ _ _ _" className="otpfield" value={otp2} onChange={handleChange} />
    <button className="resendotp" onClick={Resendotp} disabled={(counter!==0) ? true : false} >Resend Otp?</button><p className="resendtimer">: {counter}</p>
    <button className="verifybutton" onClick={Clickhandle}  ><p className="verifytext">Verify</p></button>
    </div>
       )}
       </>
)
}
export default Otp1;