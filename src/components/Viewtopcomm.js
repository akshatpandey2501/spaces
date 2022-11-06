import React from "react";
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import Avatarsvg from "../images/Group 71.svg"
import Personsvg from "../images/Group.svg"
import Arrowtocomm from "../images/arrowrightcircle.svg"
import "./viewtopcomm.css"
function Viewtopcomm(){
    return(
        <div className="viewtopcomm">
            <Sidebar/>
            <Topcomm/>
            <p className="viewtopcommheading">Top Communities</p>
            <div className="topcommcard">
                <div className="topcommimagebox"><img src={Avatarsvg} className="viewtopcommimg" ></img></div>
                <img src={Personsvg} className="personimage"></img>
                <p className="viewtopcommfollowers">50k Members </p>
                <button className="viewtopcommfollowbtn"><p className="follow">Follow</p> </button>
            </div>
            <p className="viewtopcommgrowing">Growing Communities</p>
            <div className="growingcommbox">
                <img src={Avatarsvg} className="viewtopgrowimg" ></img>
                <p className="viewtopcommgrowfollowers"><img src={Personsvg} className="personimage1"></img>50k Members </p>
                <image src={Arrowtocomm} className="arrowtocomm"></image>
            </div>
        </div>
    )
}
export default Viewtopcomm;