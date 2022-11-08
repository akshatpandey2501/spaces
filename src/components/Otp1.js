import React, { useEffect, useState } from "react";
import Loginsvg from "../images/welcome back.svg"
import "./otp.css"
import axios from "axios";
import Errorsvg from "../images/errorsign.svg"
import { useNavigate } from "react-router-dom";


function Otp1(){
 
    const[otp2,setOtp2]=useState("")
    const handleChange=e=>{
       setIsShow(false)
        setOtp2(e.target.value);
    }
    
    var intell={email:localStorage.getItem("forgote"),otp:otp2}
    const[isShown,setIsShow]=useState(false)
    const[otperror,setOtpError]=useState("")    
    const Clickhandle=event=>{
        event.preventDefault();
        setOtp2("")
        axios.post('https://spacesback-production.up.railway.app/signup/verify',intell).then((res) => {
          console.log(res);
          console.log(intell)
          
          if (res.status === 200) {
            console.log(intell)
            navigate("/Reset")
            localStorage.setItem("resettoken",res.data.token)
            
          }
        })
        .catch((err) => {
          console.log(err);
          setIsShow(true)
          setOtpError(err.response.data.msg)
          
        })
    }
    var intell1={email:localStorage.getItem("forgote")}
    
    const navigate=useNavigate()
    const Resendotp=e=>{
        e.preventDefault();
        
        axios.post('https://spacesback-production.up.railway.app/resendotp',intell1).then((res) => {
          console.log(res);
          if(res.status===200){
            navigate("/Reset")
            localStorage.removeItem("forgote")
          }
          })
        .catch((err) => {
          console.log(err);
          setOtpError(err.response.data.msg)
          setIsShow(true)

        })

    } 
        
        const[counter,setCounter]=useState(29)
        useEffect(()=>{
            const timer =
            counter > 0 && setInterval(() => setCounter(counter-1),1000);
            return()=>clearInterval(timer);
        },[counter]);
  
return(
       
    <div className="otp">
      <div className="usererrorboxotp" style={{display: isShown ? 'block' : 'none'}}><img src={Errorsvg} className="errorimgotp" alt="otp error" ></img><p className="usererror1otp">{otperror}</p></div>
    <img className="otpimg" src={Loginsvg} alt="login img"/>
    <p className="verify">Verification</p> 
    <p className="enterotp">Enter 6 digit OTP send to your EmailID</p>
    <input type="text" maxLength="6" id="otpinput" placeholder="_ _ _ _ _ _" className="otpfield" value={otp2} onChange={handleChange} />
    <button className="resendotp" onClick={Resendotp} disabled={(counter!==0) ? true : false} >Resend Otp?</button><p className="resendtimer">: {counter}</p>
    <button className="verifybutton" onClick={Clickhandle}  ><p className="verifytext">Verify</p></button>
    </div>
      
)
}
export default Otp1;