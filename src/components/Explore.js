import React from "react";
import { useEffect,useState } from "react";
import Createpostsvg from "../images/pluscircle.svg"
import Createspacesvg from "../images/plussquare.svg"
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./explore.css"; 
import Personsvg from "../images/Group.svg"
import axios from "axios";
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"
import { Next } from "react-bootstrap/esm/PageItem";

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
       
  const[isShow,setIsshow]=useState(false)      
    useEffect(() => {
      fetchData();    
    }, []);
    function takeTosubspace(e){
      if(localStorage.getItem("spacename")!==null){
        localStorage.removeItem("spacename")
      }
      localStorage.setItem("spacename",e.currentTarget.id)
    }
    const[feednumber,setFeednumber]=useState(1)
    var length=data.length
  var arraycopy=[...data]

    const fetchData2 = async() =>{
       const myapi='https://spacesback-production.up.railway.app/p/next' 
      await axios.post(myapi,feednumber).then((res) => {
      console.log(res)
      setIsshow(true)
     arraycopy=[...data,res.data]
     console.log(arraycopy)
   })
   console.error();
  };
function Viewmoreposts(){
fetchData2()
setFeednumber(feednumber+1)
}
const navi=useNavigate()
function navigateUser(even){
  if(localStorage.getItem("idpost")!==null){
    localStorage.removeItem("idpost")
  }
  navi("/Showpost")
  localStorage.setItem("idpost",even.currentTarget.id)
}   
return(
    <div className="home">
       <Sidebar/>
       
      <div className="create"><img src={Createpostsvg} alt="person" className="posticon" /><img src={Createspacesvg} alt="person" className="spaceicon" /><button className="createpostbutton" disabled="true"><p className="createpost">Create Post</p></button><button className="createspacebutton" disabled="true" ><p className="createspace">Create Subspace</p></button></div>
       
      <p className="Posts">All Posts</p>
        <div className="topcomm">
      <p className="topcommtext">Top Communities</p>
      <div className="communityarea">
{top.map((index,k)=>(
  <>
  <div className="commcontainer">
       <p className="commnumber">{k+1}</p><p className="topcommname"><Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={index.name} onClick={takeTosubspace}>{index.name}</Link></p><img src={Personsvg} alt="person" className="personicon" /><p className="topcommfollower">{index.members}</p>
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
   {arraycopy.map((items)=>(
    
    <div className="card" >
      <p className="cardusername">{items.author}/</p><p className="subspace">{items.subspace}</p>
       <img src={Upvotesvg}  className="upvoteicon" /><p className="upvotes">{items.votes}</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" onClick={navigateUser} id={items._id} /><p className="comments" >{items.comments.length}</p> 
      <p className="posttext">{items.heading}</p>
      <img src={"https://spacesback-production.up.railway.app/"+items.imgpath} alt="popular" className="postimg1" />
      
      </div>
    ) )
   }</div>
    
   {(isShow)&&(
    <div className=" cardarea"> 
   <>
   
      {arraycopy[10].map((items)=>(
    
    <div className="card" >
      <p className="cardusername">{items.author}/</p><p className="subspace">{items.subspace}</p>
       <img src={Upvotesvg}  className="upvoteicon" /><p className="upvotes">{items.votes}</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{items.comments.length}</p> 
      <p className="posttext">{items.heading}</p>
      <img src={"https://spacesback-production.up.railway.app/"+items.imgpath} alt="popular" className="postimg1" />
      
      </div>
      
    ))
   }
   
   </>
   </div>
  )}
   <div className="viewmore"><p className="viewmoretext" onClick={Viewmoreposts}>View more</p></div>
 </div>
)
}

export default Explore;