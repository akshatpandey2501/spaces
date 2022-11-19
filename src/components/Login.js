import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import Loginsvg from "../images/welcome back.svg"
import Mailsvg from "../images/fluent_mail-20-filled.svg"
import Passwordsvg from "../images/password.svg"
import Errorsvg from"../images/errorsign.svg"
import { Link, useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Nav from "../Nav";
function Login(){
   
   const [loginerror,setLoginError]=useState("abcd")
    const[email,setLogin] = useState("");
    const[password,setPassword]=useState("")
    const handleChange = event =>{
      setLogin(event.target.value)
      setIsShow(false)
   };
   const handleChange1 = event =>{
      setIsShow(false)
    setPassword(event.target.value);
 };
 const navigate=useNavigate();
 const[isShown,setIsShow]=useState(false)
 const[loadbool,setLoadbool]=useState(false)
 var info={email:email,password:password};
 console.log(info)
    const Buttionaction1=e=>{
      setLoadbool(true)
        e.preventDefault();
        setLogin("")
        setPassword("")
         axios.post('https://spacesback-production.up.railway.app/login',info).then((res) => {
            console.log(res);
            if(res.status===200){
              navigate("/Userlogin")
              setLoadbool(false)
              sessionStorage.setItem("userloggedin",true)
              if(localStorage.getItem("logintoken")!==null){
               localStorage.removeItem("logintoken")
              }
              localStorage.setItem("logintoken",res.data.token)
            }
          })
          .catch((err) => {
            console.log(err);
            setLoginError(err.response.data.msg)
            setIsShow(true)

          })
       }
    return(

        <div className="login">
         <Nav/>
         
         <div className="usererrorboxlog" style={{display: isShown ? 'block' : 'none'}} ><img src={Errorsvg} className="errorimglog" alt="login error" ></img><p className="usererror1log">{loginerror}</p></div>
         <img className="loginimg1" src={Loginsvg} alt="login img"/>
         
         <p className="welcomeback">Welcome Back</p> 
         <p className="details1">Enter your details</p>
         <img src={Mailsvg} alt="mail" className="emailicon" />
         <input type="text" id="emaiid" placeholder="Email id" className="email" value={email} onChange={handleChange}/>
         <img src={Passwordsvg} alt="password" className="passwordinputicon" />
         <input type="password" id="password" placeholder="Password" className="pass" value={password} onChange={handleChange1} />
         <p className="forgot"><Link to="/Forgot" style={{ textDecoration: 'none',color:'black'}}>Forgot Password?</Link></p>
         <button className="loginbutton" onClick={Buttionaction1}><p className="logintext">Log In</p></button>
         <p className="byclicking">By clicking on Login, I accept the <b>Terms & Conditions</b> &<b> Privacy Policy</b></p>
         <p className="createacc"><Link to="/Signup" style={{ textDecoration: 'none',color:'black'}}>CREATE ACCOUNT</Link></p>
         {loadbool===true?(<Spinner animation="border" id="apiloader" />):(null)}
        </div>
      
    );
}
export default Login;