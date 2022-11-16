import React from "react";
import "./showprofile.css"
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import Avatarsvg from "../images/Group 71.svg"
function Showuser(){
    return(<>
        
         <Topcomm/>
         <Sidebar/>
        
      <p className="profile">Profile</p>
      <div className="usercard"><img src={Avatarsvg} alt="userprofile" className="userimage" /><p className="usersname">znscssb</p><p className="editprofile">Edit Profile</p></div>
      <div className="userbar"><p className="posts">Posts</p><p className="usercomments">Comments</p></div>

     
      </>
    )
}
export default Showuser;