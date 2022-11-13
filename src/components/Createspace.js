import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./createspace.css"
import Avatarsvg from "../images/Group 71.svg"
import Rulessidebar from "./Rulessidebar";
import Tokentoheader from "./Tokentoheader";
import Searchsvg from "../images/search.svg"
function Createspace(){
    const[spacename,setSpacename]=useState("")
    const[spacedescri,setSpacedescri]=useState("")
    const[spacerules,setSpacerules]=useState("")
    const[spacefile,setSpaceFile]=useState()
    
    function changeHandle1(event){
        setSpacename(event.target.value)
    }
    function changeHandle2(event){
       setSpacedescri(event.target.value)
    }
    function changeHandle3(event){
       setSpacerules(event.target.value)
    }
    function handleChange4(event){
        setSpaceFile(event.target.files[0])
          

        console.log(event.target.files)
    }
   const navigt=useNavigate()
    function submitApi(event){
         const uploadimage=new FormData()
        uploadimage.append("image",spacefile)
        uploadimage.append("about",spacedescri)
        uploadimage.append("name",spacename)
        uploadimage.append("rules",spacerules)
        setSpaceFile('')
        setSpacedescri('')
        setSpacename('')
        setSpacerules('')
        event.preventDefault();
        Tokentoheader(localStorage.getItem("logintoken"))
        axios.post('https://spacesback-production.up.railway.app/s/newsubspace',uploadimage).then((res) => {
            console.log(res);
            if (res.status == 200) {
             navigt("/Userlogin")
            
            } 
          })
          .catch((err) => {
           console.log(err)
          console.log(uploadimage)
            })
    }
    const[search,setSearch]=useState("")
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
function takeTosubspace(e){
  if(localStorage.getItem("spacename")!==null){
    localStorage.removeItem("spacename")
  }
  localStorage.setItem("spacename",e.currentTarget.id)
}
        return(
        <div className="createspace">
            <Sidebar/>
            <img src={Searchsvg} alt="search" className="searchicon" /><input type="search" id="search" className="search" onChange={handleSearch} value={search} placeholder="Search" />
            <>
            <div className="subspacecard">
          {searchresult.map((searches)=>( 
           
           <p className="subspaces"><Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={searches} onClick={takeTosubspace}>{searches}</Link></p>
           
            
          ))} </div>
          </>
            <Rulessidebar/>
            <p className="createspaceheading">Create Subspace</p>
         <form enctype="multipart/form-data" >
         <div className="createspacebox">
            
            <p className="spacenametitle">Space Name</p>
          <input type="text" className="spacename1" onChange={changeHandle1} value={spacename}></input>
          <p className="spacedescriptiontitle1" >Space Description</p>
          <textarea className="spacedescription" cols="30" rows="10" onChange={changeHandle2} value={spacedescri} ></textarea>
          <p className="spaceruletitle">Space Description</p>
          <textarea className="spacerules" cols="30" rows="10" onChange={changeHandle3} value={spacerules}></textarea>
          <label for="inputimage">Drag and Drop image or Upload
          <input type="file" id="inputimage" className="profileimage" accept="image/png, image/jpg, image/gif, image/jpeg" onChange={handleChange4} ></input>
          </label>
          <button className="createbtn" onClick={submitApi} ><p className="createtext">Create</p> </button>
         </div>
        </form>
       <div className="createspaceuserloginarea"><img src={Avatarsvg} alt="person" className="createspaceavatar" /><p className="createspaceusername">Akshat123</p><button className="createspacelogoutbutton"><p className="createspacelogouttext">Logout</p></button></div>
     
        </div>
    )
}
export default Createspace;
