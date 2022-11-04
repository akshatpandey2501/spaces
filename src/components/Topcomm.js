import React from "react";
import Personsvg from "../images/Group.svg"
import "./topcomm.css";
function Topcomm(){
return(
    <div className="topcomm">
        <p className="topcommtext">Top Communities</p>
        <ol>
            <li><p className="topcommname1">ghjhkjmv</p><img src={Personsvg} alt="person" className="personicon" /><p className="topcommfollower">34k</p></li>
            {/* <li><p className="topcommname2">akshat</p><img src={Personsvg} alt="person" className="personicon1" /><p className="topcommfollower1">44k</p></li>
            <li><p className="topcommname3">ghjhkjmv</p><img src={Personsvg} alt="person" className="personicon2" /><p className="topcommfollower">54k</p></li> */}
        </ol>
        <button className="topcommview" ><p className="topcommviewtext">VIEW MORE</p></button>
        <p className="topcommprivacy">Privacy Policy</p>
        <p className="topcommagreement">User Agreement </p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
    </div>
)
}
export default Topcomm;