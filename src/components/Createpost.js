import React, { useEffect, useState } from "react";
import "./createpost.css"
import Searchsvg from "../images/search.svg"
import "./createspace.css"
import Avatarsvg from "../images/Group 71.svg"
import Sidebar from "./Sidebar";
import Rulessidebar from "./Rulessidebar";
import { Link, useNavigate } from "react-router-dom";
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
      
      setFileinfo(event.target.files[0]) 
     }
     const handleChange3=event=>{
      setWhichSubSpace(event.target.value)
     }
    const [spacename,setSpacename]=useState([

    ])
    const navigt=useNavigate()
   function sendInfo(e){
    const uploadpost=new FormData()
        uploadpost.append("image",fileinfo)
        uploadpost.append("subspace",whichsubspace)
        uploadpost.append("para",text)
        uploadpost.append("heading",description)
         setDescription("")
         setText("")
        e.preventDefault();
 
    console.log("hello")
    Tokentoheader(localStorage.getItem("logintoken"))
    axios.post('https://spacesback-production.up.railway.app/p/newpost',uploadpost).then((res) => {
      console.log(res);
      
      if (res.status == 200) {
     navigt("/Userlogin")
        } 
    })
    .catch((err) => {
      console.log(err)
      
      })
   }
   const[search,setSearch]=useState()
const handleSearch=e=>{
       setSearch(e.target.value)

}
const[searchresult,setSearchResult]=useState([])
var searchdata={text:search}
const fetchData3 = async() =>{
        
  await axios.post('https://spacesback-production.up.railway.app/s/search',searchdata).then((res) => {
  console.log(res)
 setSearchResult(res.data)
   console.log(search)

})
console.error();
};
 
  
useEffect(() => {

fetchData3();


},[search]);
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
  var a=2;
  function changeType(e){
    console.log(e.target.value);
    
    if(e.target.value=== "image"){
    setShowImage(true)
  }
    else{
    setShowImage(false)
  }
    a++;
  }
  function takeTosubspace(e){
    if(localStorage.getItem("spacename")!==null){
      localStorage.removeItem("spacename")
    }
    localStorage.setItem("spacename",e.currentTarget.id)
  }
    return(
             <div className="createpost">
           <Sidebar/>
           <Rulessidebar/>
           <img src={Searchsvg} alt="search" className="searchicon" /><input type="search" id="search" className="search" onChange={handleSearch} value={search} placeholder="Search" />
          
          <>
          <div className="subspacecard">
        {searchresult.map((searches)=>( 
        <p className="subspaces"><Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={searches} onClick={takeTosubspace}>{searches}</Link></p>
         
          
        ))} </div>
        </>
           <form enctype="multipart/form-data" >
            <p className="createpostheading">Create Post</p>
         <div className="createpostsbox">
         
            
          <select className="spacenames" onChange={handleChange3} > choose a subspace
          {spacename.map((items)=>(
            <option   value={items}><p className="usersubspacesname">{items}</p></option>
          
          ))}
          </select>
          <select onChange={changeType} className="chooseposttype">choose post type
          <option ><p className="type" >Text</p></option>
          <option><p className="type">image</p></option>
          </select>
          <p className="spacedescriptiontitle">Title</p>
          
          <p className="spaceruletitle">{showimage?("Image"):("Text")}</p>
          <textarea className="posttitle" cols="30" rows="10" onChange={handleChange} value={description}></textarea>
          <label for="inputimage1" id="inputimg1" style={showimage?{display:"block"}:{display:"none"}}>Upload   </label>        
          <input type={showimage?("file"):("text")} id="inputimage" className="textfield" accept="image/png, image/jpg, image/gif, image/jpeg" style={showimage?{display:"none"}:{display:"block"}} onChange={showimage?handleFile : handleText}  ></input>
         
          <button className="createbtn" onClick={sendInfo}><p className="createtext">Create</p> </button>
         </div>
        </form>
       <div className="createspaceuserloginarea"><img src={Avatarsvg} alt="person" className="createspaceavatar" /><p className="createspaceusername">Akshat123</p><button className="createspacelogoutbutton"><p className="createspacelogouttext">Logout</p></button></div>
     
        </div>
    )
}
export default Createpost;
