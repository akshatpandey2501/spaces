import React from "react";
import Personsvg from "../images/Group.svg"
import "./topcomm.css";
import { Link } from "react-router-dom"
function Topcomm({spaceinfo}){
return(
    <div className="topcomm">
    {/* <p className="topcommtext">Top Communities</p>
    <div className="communityarea">
{spaceinfo.map((index,k)=>(
<>
<div className="commcontainer">
     <p className="commnumber">{k+1}</p><p className="topcommname">{index.name}</p><img src={Personsvg} alt="person" className="personicon" /><p className="topcommfollower">{index.members}</p>
     </div>
     <div className="secondline"></div>
     </>
)
)}
</div> */}
        <hr className="firstline"></hr>
        <p className="topcommviewtext"><Link to="/TopCommunities" style={{ textDecoration: 'none',color:'black'}}>View More</Link></p>
        <p className="topcommprivacy"><Link to="/Privacypolicy" style={{ textDecoration: 'none',color:'black'}}>Privacy Policy</Link></p>
        <p className="topcommagreement"><Link to="/Contentpolicy" style={{ textDecoration: 'none',color:'black'}}>Content Policy</Link></p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
    </div>
)
}
export default Topcomm;