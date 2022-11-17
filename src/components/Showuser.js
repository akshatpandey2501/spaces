import React from "react";
import { useEffect,useState } from "react";
import Tokentoheader from "./Tokentoheader";
import "./showprofile.css"
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import Avatarsvg from "../images/Group 71.svg"
import axios from "axios";
import {Link} from"react-router-dom"
import Personsvg from "../images/Group.svg"
import Showmoresubsvg from "../images/showmoreicon.svg"
import Showmorearrowsvg from "../images/showmoremyspace.svg"
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Trashsvg from "../images/trash.svg"
import Downvotesvg from "../images/arrowdown.svg"
function Showuser(){
    const [usermysubspace,setMysubspace]=useState([])
    const [myusername,setMyusername]=useState([])
    const [top,setTop]=useState([])
    const[data,setData]=useState([{
        author:'',
        subspace:'',
        heading:'',
        imgpath:'',
        votes:'',
        createdAt:'',
        comments:[],
      }])
    const fetchData = async() =>{
        
await axios.get('https://spacesback-production.up.railway.app/s/userinfo').then((res) => {
console.log(res)
    setMysubspace(res.data.mysubspaces)
    setMyusername(res.data.user_name)
    setTop(res.data.topcomm)
     })
     console.error();
    };
    const[showSpace,setShowspace]=useState(false)
    function mapSubspace(){
      console.log("hello")
      var count=1
      if(count%2!==0){
     setShowspace(true)
     count++
      }
      else if(count%2===0){
        setShowspace(false)
        count++
      }
    } 
    const [showCards,setShowCards]=useState(false) 
    function takeTosubspace(e){
        if(localStorage.getItem("spacename")!==null){
          localStorage.removeItem("spacename")
        }
        localStorage.setItem("spacename",e.currentTarget.id)
      }   
        
    useEffect(() => {
      Tokentoheader(localStorage.getItem("logintoken"))
      fetchData();
      },[]);
      
    const fetchData1 = async() =>{
        
        await axios.get('https://spacesback-production.up.railway.app/p/myposts').then((res) => {
        console.log(res)
            setData(res.data.myposts)
             })
             console.error();
            };
      function askPosts(){
        setShowCards(true)
        setShowMyComments(false)
        Tokentoheader(localStorage.getItem("logintoken"))
        fetchData1()
      }
      const timenow = Date.now();
      const[showmycomment,setShowMyComments]=useState(false)
      const[comments,setComments]=useState([{
        createdAt:'', 
postId:{
  heading:"",
  subspace:"",
},
subspace:"",
text:"",
_id:'' ,
      }])
      const fetchData2 = async() =>{
        
        await axios.get('https://spacesback-production.up.railway.app/c/mycomments').then((res) => {
        setComments(res.data.mycomments)
        console.log(res)
           
             })
             console.error();
            };
      function showComents(){
        setShowMyComments(true)
        setShowCards(false)
        Tokentoheader(localStorage.getItem("logintoken"))
        fetchData2()
      }
  
    return(<>
        
         <Topcomm/>
         <Sidebar/>
        
      <p className="profile">Profile</p>
      <img src={Showmoresubsvg} className="showmoresub"/>
        <img src={Showmorearrowsvg} className="showarrow" onClick={mapSubspace}/>
      <div className="usercard"><img src={Avatarsvg} alt="userprofile" className="userimage" /><p className="usersname">{myusername}</p><p className="editprofile">Edit Profile</p></div>
      <div className="userbar"><p className="posts" onClick={askPosts} style={{color: showCards? "#0079D3" : "#212427"}} >Posts</p><p className="usercomments" onClick={showComents}style={{color: showmycomment? "#0079D3" : "#212427"}} >Comments</p></div>
      <p className="myspacesname">My Spaces</p>
      <div className="thesubspace">
          {usermysubspace.map((spaces)=>{
           return showSpace ? (
                <p className="sidebarsubspace" ><Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={spaces} onClick={takeTosubspace}>{spaces}</Link></p>
           ):(null) 
         
})}

 </div> 
 <div className="userloginarea"><img src={Avatarsvg} alt="person" className="avatar"/><p className="username" >{myusername}</p><button className="logoutbutton"><p className="logouttext">Logout</p></button></div>        
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
))}
</div>
<hr className="firstline"></hr>
        <p className="topcommviewtext"><Link to="/TopCommunities" style={{ textDecoration: 'none',color:'black'}}>View More</Link></p>
        <p className="topcommprivacy"><Link to="/Privacypolicy" style={{ textDecoration: 'none',color:'black'}}>Privacy Policy</Link></p>
        <p className="topcommagreement"><Link to="/Contentpolicy" style={{ textDecoration: 'none',color:'black'}}>Content Policy</Link></p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
</div>


<div className="cardareakaarea">
<div className=" cardarea12">       
   {data.map((items)=>{
    return showCards?(
    <div className="card" >
      <p className="cardusername">{Math.floor((timenow-items.createdAt)/3600000)}hours ago by {myusername}/</p><p className="subspace">{items.subspace}</p>
       <img src={Upvotesvg}  className="upvoteicon" /><p className="upvotes">{items.votes}</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{items.comments.length}</p> <img src={Trashsvg} alt="delete" className="trashicon" />
      <p className="posttext">{items.heading}</p>
      <img src={"https://spacesback-production.up.railway.app/"+items.imgpath} alt="popular" className="postimg" />
      
      </div>):(null)
 } )
   }</div>
      </div>
      <div className=" cardarea12">       
   {comments.map((itemss)=>{
    return showmycomment?(
    <div className="card123" >
      <p className="comment123">{itemss.text}</p>
      <p className="cardusername">{Math.floor((timenow-itemss.createdAt)/3600000)}hours ago by {myusername} / </p><p className="subspace">{itemss.postId.subspace}</p>
    
      <p className="posttext123">{itemss.postId.heading}</p>
      
      </div>):(null)
 } )
   }</div>
      </>
    )
}
export default Showuser;