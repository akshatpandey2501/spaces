import React from "react";
import { useEffect,useState } from "react";
import Createpostsvg from "../images/pluscircle.svg"
import Createspacesvg from "../images/plussquare.svg"
import Sidebar from "./Sidebar";

import { Link } from "react-router-dom";
import "./explore.css"; 
import Personsvg from "../images/Group.svg"
import axios from "axios";
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"

function Explore(){
  const[data,setData]=useState([{
    author:'',
    subspace:'',
    heading:'',
    imgpath:'',
    votes:'',
    comments:[],
  }])
  const[top,setTop]=useState([{
  name:'',
  members:""
  }])
    
    const fetchData = async() =>{
        
        await axios.get('https://spacesback-production.up.railway.app/p/feed').then((res) => {
        console.log(res)
       setData(res.data.posts)
       setTop(res.data.topcomm)
        console.log(data)
     })
     console.error();
    };
       
        
    useEffect(() => {
      fetchData();
      
      
    }, []);

   
return(
    <div className="home">
                <div className="create"><img src={Createpostsvg} alt="person" className="posticon" /><img src={Createspacesvg} alt="person" className="spaceicon" /><button className="createpostbutton" disabled="true"><p className="createpost">Create Post</p></button><button className="createspacebutton" disabled="true" ><p className="createspace">Create Subspace</p></button></div>
        <Sidebar/>
       
      
        <p className="Posts">All Posts</p>
        <div className="topcomm">
      <p className="topcommtext">Top Communities</p>
      <div className="communityarea">
{top.map((index,k)=>(
  <>
  <div className="commcontainer">
       <p className="commnumber">{k+1}</p><p className="topcommname">{index.name}</p><img src={Personsvg} alt="person" className="personicon" /><p className="topcommfollower">{index.members}</p>
       </div>
       <div className="secondline"></div>
       </>
)
)}
</div>
<div className="firstline"></div>
<div className="firstline1"></div>
 <p className="topcommviewtext"><Link to="/TopCommunities" style={{ textDecoration: 'none',color:'black'}}>View More</Link></p>
        <p className="topcommprivacy"><Link to="/Privacypolicy" style={{ textDecoration: 'none',color:'black'}}>Privacy Policy</Link></p>
        <p className="topcommagreement"><Link to="/Contentpolicy" style={{ textDecoration: 'none',color:'black'}}>Content Policy</Link></p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
</div> 

<div className=" cardarea">       
   {data.map((items)=>(
    
    <div className="card" >
      <p className="cardusername">{items.author}/</p><p className="subspace">{items.subspace}</p>
       <img src={Upvotesvg}  className="upvoteicon" /><p className="upvotes">{items.votes}</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{items.comments.length}</p> 
      <p className="posttext">{items.heading}</p>
      <img src={"https://spacesback-production.up.railway.app/"+items.imgpath} alt="popular" className="postimg" />
      
      </div>
    ) )
   }</div>
 </div>
)
}

export default Explore;