import React, { useState } from "react"
import "./forgot.css";
import axios from "axios";
import Loginsvg from "../images/welcome back.svg"
import Mailsvg from "../images/fluent_mail-20-filled.svg"
import { useNavigate } from "react-router-dom";
import Errorsvg from "../images/errorsign.svg"

function Forgot(){
  const[isShown,setIsShow]=useState(false)
  const [signerror,setSignError]=useState(" ")
    const[forgotemail,setForgot]=useState("")
    var forgotinfo={email:forgotemail}
    const forgotChange=e=>{
        setForgot(e.target.value);
    }
    const navigate=useNavigate();
    const handleClicking=event=>{
        event.preventDefault()
        if(localStorage.length !==0){
          localStorage.removeItem("forgote")
        }
        localStorage.setItem("forgote",forgotemail)
        axios.post('https://spacesback-production.up.railway.app/forgotpassword',forgotinfo).then((res) => {
            console.log(res);
            console.log()
           
            if (res.status === 200) {
             
             navigate("/Otp1")
            } 
          })
          .catch((err) => {
            console.log(err);
            
            setSignError(err.response.data.msg)
            setIsShow(true)
         
          })
    }

    return(
        <div className="forgotpass"><div className="usererrorboxforgot" style={{display: isShown ? 'block' : 'none'}}><img src={Errorsvg} className="errorimgforgot" alt="signup error"></img><p className="usererror1forgot">{signerror}</p></div>
        <img className="loginimg" src={Loginsvg} alt="login img"/>  
        <p className="forgot1">Forgot Password?</p> 
        <p className="send">We'll send you a OTP on this email</p>
        <img src={Mailsvg} alt="mail" className="giveemailicon" />
        <input type="text" id="emaiid" placeholder="Email id" className="giveemail" onChange={forgotChange} value={forgotemail} />
        <button className="forgotbutton" onClick={handleClicking} ><p className="forgottext">Continue</p></button>
       </div>
       
    );
}
export default Forgot;