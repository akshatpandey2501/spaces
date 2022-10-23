import React from "react";
import "./signup.css";
function Signup(){
    return(
        <div className="signup">
          <img src="./images/signup.svg" alt="signup"/>
         <p className="create">Create an account</p> 
         <p className="details">Enter your details</p>
         <label >User Name</label>
         <input type="text" id="User Name" placeholder="username" className="input" />
         <label >Emailid</label>
         <input type="text" id="Emaiid" placeholder="Email id" className="input1" />
         <label >Password</label>
         <input type="password" id="password" placeholder="Password" className="input2" />
         <label >Confirm Password</label>
         <input type="password" id="Confirm Password" placeholder="Confirm Password" className="input3"/>
        </div>
    );
}
export default Signup;