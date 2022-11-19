import React from "react";
// import { FaUserAlt,RiLockPasswordFill,} from 'react-icons/fa';
import axios from "axios";
import { useState,useEffect } from "react";
import "./signup.css";
import Nav from "../Nav";
import Signupsvg from "../images/signup.svg"
import Mailsvg from "../images/fluent_mail-20-filled.svg"
import Usersvg from "../images/username.svg"
import Passwordsvg from "../images/password.svg"
import Errorsvg from "../images/errorsign.svg"
import { Link, useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner';
function Signup(){
    
    //  var correctpassword=false
     const[message,setMessage] = useState("");
    const[message3,setMessage3]=useState("")
    const[error,setError]=useState("");
    const handleChange3 = event =>{
      
      setMessage3(event.target.value);
      setIsShow(false)
   };
     const handleChange = event =>{
        setMessage(event.target.value);
        setIsShow(false)
     };
    
     const[message1,setMessage1] = useState("");
     const[error1,setError1] = useState("");
 
     const handleChange1 = event => {
      setIsShow(false)
        setMessage1(event.target.value);
     }
     const[isShowError,setIsShowerror]=useState(false)
     const[isShowEmailError,setIsshowEmailError]=useState(false)
     const[isShowConfirmError,setIsshowConfirmerror]=useState(false)
    const password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const emailreg = 
    new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const[correctpassword,setCorrectPass]=useState(false)
    const[correctemail,setCorrectEmail]=useState(false)
    const[correctcnfpassword,setCorrectCnfPass]=useState(false)
        useEffect(() => {
          if (password.test(message1)) {
          setError1("")  
             setCorrectPass(true) 
             setIsShowerror(false)    
            }
          else if(message1){
            
            setError1("invalid password must have:number,uppercase,lowercase,symbol")
            setIsShowerror(true)
           
            } 
            
        },[message1])
        
        useEffect(() => {
          if (emailreg.test(message)) {
          setError("")  
            setCorrectEmail(true) 
            setIsshowEmailError(false)        
            }
          else if(message){
            
            setError("invalid email")
            setIsshowEmailError(true)
           
            } 
            
        },[message])
     const[loadbool,setLoadbool]=useState(false)   
        // var confirmemail=false;
     const [message2,setMessage2]=useState("")
     const[error2,setError2]=useState(null)
     const handleChange2=event=>{
              setMessage2(event.target.value);
              if(message1 !== (event.target.value)){
                setIsshowConfirmerror(true)
                setError2("password not matched")
                setCorrectCnfPass(true)
              }else{
                setIsshowConfirmerror(false)
                setError2("");
                setCorrectCnfPass(true)
                
              }
     }
     const[isShown,setIsShow]=useState(false)
     const navigate=useNavigate()
     const [signerror,setSignError]=useState(" ")
     var value={user_name:message3,email:message,password:message1}
     const Buttonaction=e=>{
       e.preventDefault();
       if(localStorage.length !==0){
        localStorage.removeItem("email")
       }
       localStorage.setItem("email",message)
       setLoadbool(true)
       setError2("")
       setError("")
       setMessage2("")
       setMessage1("")
       setError1("")
       setMessage("")
       setMessage3("")
       
       if(message.length===0){
        setError("Required!")
        setCorrectEmail(false)
       }
       if(message1.length===0){
        setError1("Required!")
        setCorrectCnfPass(false)
       }
       
       if(correctemail && correctcnfpassword && correctpassword){
        axios.post('https://spacesback-production.up.railway.app/signup',value).then((res) => {
          console.log(res);
          if (res.status == 201) {
           navigate("/Otp")
          setLoadbool(false)
          sessionStorage.setItem("otpnavigate","true")
          } 
        })
        .catch((err) => {
          console.log(err)
          setSignError(err.response.data.msg)
          setIsShow(true)
          })
       }
       
     }
      

    return(
      
        <div className="signup"><Nav/><div className="usererrorbox" style={{display: isShown ? 'block' : 'none'}}><img src={Errorsvg} className="errorimg" alt="signup error"></img><p className="usererror1">{signerror}</p></div>
          <img src={Signupsvg} alt="signup" className="signimg" />
         <p className="createheading">Create an account</p> 
         <p className="details">Enter your details</p>
         <img src={Usersvg} alt="username" className="usericon1" />
         <input type="text" id="User Name" placeholder="username" className="input" value={message3} onChange={handleChange3}/>
         <img src={Mailsvg} alt="mail" className="mailicon" />
         <p className="emailerror" style={{display: isShowEmailError ? 'block' : 'none'}}>{error}</p>
         <input type="text" id="Emaiid" placeholder="Email id" className="input1" value={message} onChange={handleChange} />
         <img src={Passwordsvg} alt="password" className="passwordicon" />
         <p className="error" style={{display: isShowError ? 'block' : 'none'}} >{error1}</p>
         <input onChange={handleChange1} value={message1} type="password" id="password" placeholder="Password" className="input2"   />
         <img src={Passwordsvg} alt="password" className="passwordicon1" />
         <p className="errorconfirm" style={{display: isShowConfirmError ? 'block' : 'none'}}>{error2}</p>
         <input onChange={handleChange2} type="password" id="Confirm Password" placeholder="Confirm Password" value={message2} className="input3"  />
         <button className="continuebutton" onClick={Buttonaction}><p className="continuetext1">Continue</p></button>
         <p className="clicking">By clicking on Login, I accept the<b>Terms & Conditions</b> & <b>Privacy Policy</b></p>
         <p className="registered"><Link to="/Login" style={{ textDecoration: 'none',color:'black'}}>Already Registered?</Link></p>
         {loadbool?(<Spinner animation="border" id="apiloader" />):(null)}
        </div>
      
    );
}
export default Signup;
