import React, { useEffect, useState } from "react";
import "./createpost.css"

import "./createspace.css"
import Avatarsvg from "../images/Group 71.svg"
import Sidebar from "./Sidebar";
import Rulessidebar from "./Rulessidebar";
import axios from "axios";
import Tokentoheader from "./Tokentoheader";
function Createpost(){
    const[showimage,setShowImage]=useState(false)
    const[description,setDescription]=useState("")
    const[text,setText]=useState("")
    const[whichsubspace,setWhichSubSpace]=useState("")
    const[fileinfo,setFileinfo]=useState({
      file:[],
    })
   
   
    const handleChange=event=>{
     setDescription(event.target.value)  
    }
    const handleText=event=>{
      setText(event.target.value)  
     }
     const handleFile=event=>{
      
      setFileinfo(event.target.value) 
     }
     const handleChange3=event=>{
      setWhichSubSpace(event.target.value)
     }
    const [spacename,setSpacename]=useState([

    ])
    var postinfo={heading:description,para:text,subspace:whichsubspace,image:fileinfo}
   function sendInfo(e){
    e.preventDefault();
    console.log(postinfo) 
    console.log("hello")
    Tokentoheader(localStorage.getItem("logintoken"))
    axios.post('https://spacesback-production.up.railway.app/p/newpost',postinfo).then((res) => {
      console.log(res);
      
      if (res.status == 200) {
      console.log("yesss")
      
      } 
    })
    .catch((err) => {
      console.log(err)
      
      })
   }
    const fetchData = async() =>{
      Tokentoheader(localStorage.getItem("logintoken"))
    await axios.get('https://spacesback-production.up.railway.app/p/postform').then((res) => {
      console.log(res)
      setSpacename(res.data)
      
   }).catch(e => {
    console.log(e);
  })
}   
      
  useEffect(() => {
    fetchData();
    
    
  }, []);
    return(
             <div className="createpost">
           <Sidebar/>
           <Rulessidebar/>
           <form enctype="multipart/form-data" >
            <p className="createpostheading">Create Post</p>
         <div className="createpostsbox">
         
            
          <select className="spacenames" onChange={handleChange3} > choose a subspace
          {spacename.map((items)=>(
            <option   value={items}><p className="usersubspacesname">{items}</p></option>
          
          ))}
          </select>
          <select onChange={()=>setShowImage(true)} className="chooseposttype">choose post type
          <option ><p className="type" >Text</p></option>
          <option><p className="type">image</p></option>
          </select>
          <p className="spacedescriptiontitle">Title</p>
          
          <p className="spaceruletitle">{showimage?("Image"):("Text")}</p>
          <textarea className="posttitle" cols="30" rows="10" onChange={handleChange} value={description}></textarea>
          <label for="inputimage">
          
          <input type={showimage?("file"):("text")} id="inputimage" className="postimage" accept="image/png, image/jpg, image/gif, image/jpeg"  onChange={showimage?handleFile : handleText}  value={showimage?fileinfo : text}></input>
          </label>
          <button className="createbtn" onClick={sendInfo}><p className="createtext">Create</p> </button>
         </div>
        </form>
       <div className="createspaceuserloginarea"><img src={Avatarsvg} alt="person" className="createspaceavatar" /><p className="createspaceusername">Akshat123</p><button className="createspacelogoutbutton"><p className="createspacelogouttext">Logout</p></button></div>
     
        </div>
    )
}
export default Createpost;
