import React from "react";
// import { FaUserAlt,RiLockPasswordFill,} from 'react-icons/fa';
import axios from "axios";
import { useState,useEffect } from "react";
import "./signup.css";
import Signupsvg from "../images/signup.svg"
import Mailsvg from "../images/fluent_mail-20-filled.svg"
import Usersvg from "../images/username.svg"
import Passwordsvg from "../images/password.svg"
import { Link } from "react-router-dom";

import Otp from "./Otp";
function Signup(){
    
    //  var correctpassword=false
     const[message,setMessage] = useState("");
    const[message3,setMessage3]=useState("")
    const[error,setError]=useState("")
    const handleChange3 = event =>{
      setMessage3(event.target.value);
   };
     const handleChange = event =>{
        setMessage(event.target.value);
     };
    
     const[message1,setMessage1] = useState("");
     const[error1,setError1] = useState("");
 
     const handleChange1 = event => {
        
        setMessage1(event.target.value);
     }
    const password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const emailreg = 
    new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
   
        useEffect(() => {
          if (password.test(message1)) {
          setError1("")  
              // correctpassword= true;     
            }
          else if(message1){
            setError1("invalid password must have-number,uppercase,lowercase,symbol")
            
           
            } 
            
        },[message1])
        
        useEffect(() => {
          if (emailreg.test(message)) {
          setError("")  
            // correctemail=true;         
            }
          else if(message){
            setError("invalid email")
            
           
            } 
            
        },[message])
        
        // var confirmemail=false;
     const [message2,setMessage2]=useState("")
     const[error2,setError2]=useState(null)
     const handleChange2=event=>{
              setMessage2(event.target.value);
              if(message1 !== (event.target.value)){
                setError2("password not matched")
              }else{
                setError2("");
                // confirmemail=true;
              }
     }
     
    const[userotp,setUserOtp]=useState(false)
     const[usererror,setUserError]=useState("")
     var value={user_name:message3,email:message,password:message1}
     const Buttonaction=e=>{
       e.preventDefault();
       localStorage.setItem("email",message)
       setError2("")
       setError("")
       setMessage2("")
       setMessage1("")
       setError1("")
       setMessage("")
       setMessage3("")
       if(message.length===0){
        setError("Required!")
       }
       if(message1.length===0){
        setError1("Required!")
       }
       
        axios.post('https://spacesback-production.up.railway.app/signup',value).then((response) => {
          console.log(response);
          if (response.status == 201) {
           setUserOtp(true);
           setUserError(response.data.msg)
          } 
        })
        .catch((err) => {
          console.log(err);
          // setUserError(response.data.msg)
          // userotp=false;
        })
      
       
     }
      

    return(
      <>
       {userotp?(<Otp/>
       ):(
        <div className="signup"><p className="usererror">{usererror}</p>
          <img src={Signupsvg} alt="signup" className="signimg" />
         <p className="create">Create an account</p> 
         <p className="details">Enter your details</p>
         <img src={Usersvg} alt="username" className="usericon" />
         <input type="text" id="User Name" placeholder="username" className="input" value={message3} onChange={handleChange3}/>
         <img src={Mailsvg} alt="mail" className="mailicon" />
         <p className="emailerror">{error}</p>
         <input type="text" id="Emaiid" placeholder="Email id" className="input1" value={message} onChange={handleChange} />
         <img src={Passwordsvg} alt="password" className="passwordicon" />
         <p className="error">{error1}</p>
         <input onChange={handleChange1} value={message1} type="password" id="password" placeholder="Password" className="input2"   />
         <img src={Passwordsvg} alt="password" className="passwordicon1" />
         <p className="errorconfirm">{error2}</p>
         <input onChange={handleChange2} type="password" id="Confirm Password" placeholder="Confirm Password" value={message2} className="input3"  />
         <button className="continuebutton" onClick={Buttonaction}><p className="continuetext">Continue</p></button>
         <p className="clicking">By clicking on Login, I accept the<b>Terms & Conditions</b> & <b>Privacy Policy</b></p>
         <p className="registered"><Link to="/Login" style={{ textDecoration: 'none',color:'black'}}>Already Registered?</Link></p>
        </div>
       )}
       </>
    );
}
export default Signup;
