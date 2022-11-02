import React from "react";
import Trendingsvg from "../images/trending.svg"
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import "./explore.css"; 
import Card from "../Card";
function Explore(){
return(
    <div className="home">
        <Sidebar/>
        <Topcomm/>
        <p className="trending">Trending</p>
        <img src={Trendingsvg} alt="trending" className="trendingimg"  />
        <div className="bar" ><p className="new">New</p><p className="top">Top</p></div>
        <Card/>
    </div>
)
}
export default Explore;