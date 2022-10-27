import React, { useState } from "react";
import Loginsvg from "../images/welcome back.svg"
import "./reset.css"
import axios from "axios";

function Reset(){
    const[newpass,setNewPass]=useState("")
    const[newconfirmpass,setNewConfirmPass]=useState("")
    const handleChange1=e=>{
        setNewPass(e.target.value);
    }
    const handleChange2=e=>{
        setNewConfirmPass(e.target.value);
    }    
    var info1={email:localStorage.getItem("forgote"),newpassword:newpass}

  
    const Clickhandle1=event=>{
        event.preventDefault();
        setNewPass("")
        setNewConfirmPass("")
        axios.post('https://spacesback-production.up.railway.app/forgotpassword/otpverify/changepassword',info1).then((res) => {
          console.log(res);
         
          localStorage.clear();
          if (res.status === 200) {
           localStorage.removeItem("forgote")
          } 
        })
        .catch((err) => {
          console.log(err);
        localStorage.clear()
        })

    }
return(
    <div className="reset">
    <img className="resetimg" src={Loginsvg} alt="login img"/>
    <p className="resetpass">Reset Password</p> 
    <p className="createnew">Create a new password</p>
    <input type="text" id="otpinput" placeholder="New Password" className="newpass" value={newpass} onChange={handleChange1} />
    <input type="text" id="otpinput" placeholder="Confirm Password" className="cnfnewpass" value={newconfirmpass} onChange={handleChange2} />
   
    <button className="verifybutton" onClick={Clickhandle1} ><p className="verifytext">Verify</p></button>
    </div>

)
}
export default Reset;