import React, { useEffect, useState } from "react";

import axios from "axios";
import "./createspace.css"

function Changeprofile(){
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
           
            <p className="createspaceheading">Edit Profile</p>
         <form enctype="multipart/form-data" >
         <div className="createspacebox">
            
            <p className="spacenametitle">Space Name</p>
          <input type="text" className="spacename" onChange={changeHandle1} value={spacename}></input>
          <p className="spacedescriptiontitle" >Space Description</p>
          <input type="text" className="spacedescription"  onChange={changeHandle2} value={spacedescri} />
          <p className="spaceruletitle">Space Description</p>
          <input type="text" className="spacerules" onChange={changeHandle3} value={spacerules}/>
          <label for="inputimage">Upload
          <input type="file" id="inputimage" className="profileimage" accept="image/png, image/jpg, image/gif, image/jpeg" onChange={handleChange4} ></input>
          </label>
          <input type="text" className="spacerules" onChange={changeHandle3} value={spacerules}/>
          <button className="createbtn" onClick={submitApi} ><p className="createtext">Create</p> </button>
         </div>
        </form>
      
     
        </div>
    )
}
export default Changeprofile;
