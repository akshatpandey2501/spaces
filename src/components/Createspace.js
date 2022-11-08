import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import "./createspace.css"
import Avatarsvg from "../images/Group 71.svg"
import Rulessidebar from "./Rulessidebar";
function Createspace(){
    const[spacename,setSpacename]=useState("")
    const[spacedescri,setSpacedescri]=useState("")
    const[spacerules,setSpacerules]=useState("")
    const[spacefile,setSpaceFile]=useState({
        file:[],
    })
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
    var spaceinfo={name:spacename,about:spacedescri,rules:spacerules,image:spacefile}
    function submitApi(event){
        setSpaceFile('')
        setSpacedescri('')
        setSpacename('')
        setSpacerules('')
        event.preventDefault();
        axios.post('https://spacesback-production.up.railway.app/s/newsubspace',spaceinfo).then((res) => {
            console.log(res);
            if (res.status == 200) {
             console.log("yess")
            
            } 
          })
          .catch((err) => {
           console.log(err)
           console.log(spaceinfo)
            })
    }
        return(
        <div className="createspace">
            <Sidebar/>
            <Rulessidebar/>
            <p className="createspaceheading">Create Subspace</p>
         <form enctype="multipart/form-data" >
         <div className="createspacebox">
            
            <p className="spacenametitle">Space Name</p>
          <input type="text" className="spacename" onChange={changeHandle1} value={spacename}></input>
          <p className="spacedescriptiontitle" >Space Description</p>
          <textarea className="spacedescription" cols="30" rows="10" onChange={changeHandle2} value={spacedescri} ></textarea>
          <p className="spaceruletitle">Space Description</p>
          <textarea className="spacerules" cols="30" rows="10" onChange={changeHandle3} value={spacerules}></textarea>
          <label for="inputimage">Upload
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
