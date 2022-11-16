import React, { useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import styles from "./Userlogin.module.css"; 
import Commentsvg from "../images/message-square.svg"
import Topcomm from "./Topcomm"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"
import Createpostsvg from "../images/pluscircle.svg"
import Createspacesvg from "../images/plussquare.svg"
import Avatarsvg from "../images/Group 71.svg"
import Personsvg from "../images/Group.svg"
import { Link,useNavigate } from "react-router-dom";
import Tokentoheader from "./Tokentoheader";
import Searchsvg from "../images/search.svg"
import Downvotedonesvg from "../images/downvotedone.svg"
import Upvotedone from "../images/upvotedone.svg"
var spaceinfo;
var myusername;
function Userloginpage(){
  const [upvotedone,setUpvotedone]=useState()
const [downvotedone,setDownvotedone]=useState(false)
  const [username,setUsername]=useState("")
  const[data,setData]=useState([{
    author:'',
   
    subspace:'',
    heading:'',
    imgpath:'',
     votes:'',
    _id:"",
    para:'',
    comments:[],
    
  }])
  const[votedon,setVoted]=useState([])
  const[downvotedon,setDownVoted]=useState([])
  const[myspace,setMyspace]=useState([{
    name:'',
    members:'',
    
  }])
  const fetchData = async() =>{
        
    await axios.get('https://spacesback-production.up.railway.app/p/loggedfeed').then((res) => {
    console.log(res)
   setData(res.data.posts)
   setVoted(res.data.upvoted) 
   setUsername(res.data.user_name)
   setMyspace(res.data.topcomm)
 setDownVoted(res.data.downvoted)

 })
 console.error();
};
   
    
useEffect(() => {
  Tokentoheader(localStorage.getItem("logintoken"))
  fetchData();
  
  
},[]);
   const navigate=useNavigate()
function changeHandle(){
  navigate("/Createpost") 
}

const[iscomment,setIsComment]=useState(false)
 function showComments(){
setIsComment(true)
}
const[valueincrease,setValueinc]=useState(null)
const[valuedecrease,setValuednc]=useState(null)
const[showincrease,setShowinc]=useState(true)
const[showdecrease,setShowdnc]=useState(true)
var arraycopy1=[...downvotedon]
var arraycopy=[...votedon]
const handleClick = event => {
  Tokentoheader(localStorage.getItem("logintoken"))
  var itera=event.target.getAttribute("dataset")
   var postid={"_Id":event.currentTarget.id}
  if(downvotedon[itera]!==true){
    arraycopy1[itera] = true
    setDownVoted(arraycopy1) 
    arraycopy[itera]=false
    setVoted(arraycopy)
    if(votedon[itera]===true){
      datadummy=[...data]
      datadummy[itera].votes-=2
      setData(datadummy)
    }
    else{
      datadummy=[...data]
    datadummy[itera].votes-=1
     setData(datadummy)
    }
  axios.put('https://spacesback-production.up.railway.app/p/downvote',postid).then((res) => {
    console.log(res);
    
  })
  .catch((err) => {
    console.log(err)
        })
      
      }
      else{
        arraycopy1[itera] = false
        setDownVoted(arraycopy1) 
        datadummy=[...data]
        datadummy[itera].votes+=1
        setData(datadummy)
        
        axios.put('https://spacesback-production.up.railway.app/p/undownvote',postid).then((res) => {
          console.log(res);
           
        })
        .catch((err) => {
          console.log(err)
              })
            
            }
             
};
const handleClick1 = event => {
  Tokentoheader(localStorage.getItem("logintoken"))
  var iteration=event.target.getAttribute("dataset")
  var postid1={_Id :event.currentTarget.id}
  console.log(iteration)
  if(votedon[iteration]!==true){
arraycopy[iteration] = true
setVoted(arraycopy)
arraycopy1[iteration]=false
setDownVoted(arraycopy1)
   
    if(downvotedon[iteration]===true){
      datadummy=[...data]
      datadummy[iteration].votes+=2
      setData(datadummy)
      }
      else{
        datadummy=[...data]
    datadummy[iteration].votes+=1
    setData(datadummy)
      }
    axios.put('https://spacesback-production.up.railway.app/p/upvote',postid1).then((res) => {
      console.log(res);
     
    })
    .catch((err) => {
      console.log(err)
          })
         
        }
        else{
          arraycopy[iteration] = false
          setVoted(arraycopy)
          datadummy=[...data]
          datadummy[iteration].votes-=1
           setData(datadummy)

          axios.put('https://spacesback-production.up.railway.app/p/unupvote',postid1).then((res) => {
          
         
          })
          .catch((err) => {
            console.log(err)
                })
              
              }
               
  };

const navi=useNavigate()
function navigateUser(even){
  if(localStorage.getItem("idpost")!==null){
    localStorage.removeItem("idpost")
  }
  navi("/Showpost")
  localStorage.setItem("idpost",even.currentTarget.id)
}
spaceinfo=myspace
myusername=username
const[search1,setSearch1]=useState()
const handleSearch=e=>{
  if(localStorage.getItem("spacename")!==null){
    localStorage.removeItem("spacename")
  }
       setSearch1(e.target.value)

}
const[searchresult1,setSearchResult1]=useState([])
var searchdata={text:search1}
const fetchData3 = async() =>{
   if(search1!==('')){    
  await axios.post('https://spacesback-production.up.railway.app/s/search',searchdata).then((res) => {
  console.log(res)
 setSearchResult1(res.data)
   console.log(searchresult1)
   
})
console.error();
};
}
function sendSubname(e){
  localStorage.setItem("spacename",e.currentTarget.id)
}
  
useEffect(() => {
fetchData3();
}, [search1]);

function takeTosubspace(e){
  if(localStorage.getItem("spacename")!==null){
    localStorage.removeItem("spacename")
  }
  localStorage.setItem("spacename",e.currentTarget.id)
}
var datadummy
var topcommdata;
topcommdata=[...myspace]
return(
    <div className={styles.home}>
        <Sidebar/>
        <Topcomm first={topcommdata}/>
        <img src={Searchsvg} alt="search" className="searchicon" /><input type="search" id="search" className="search" onChange={handleSearch} value={search1} placeholder="Search" />
          
        <div className="subspacecard">
          {searchresult1.map((searches)=>( 
           
                <p className="subspaces">{(searchresult1.length===0)?("No result for"+search1):<Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={searches} onClick={takeTosubspace}>{searches}</Link>}</p>
            
            
          ))}
          </div>
          
        <div className={styles.create} ><img src={Createpostsvg} alt="person" className={styles.posticon} /><img src={Createspacesvg} alt="person" className={styles.spaceicon} /><button className={styles.createpostbutton}onClick={changeHandle} ><p className={styles.createpost}>Create Post</p></button><button className={styles.createspacebutton} ><p className={styles.createspace}><Link to="/Createspace" style={{ textDecoration: 'none',color:'black'}}>Create Subspace</Link></p></button></div>
       
        <p className={styles.Posts}>All Posts</p>
   <div className=" cardarea">       
   {data.map((items,i)=>(
    
    <div className="card"  >
      <p className="cardusername" >{items.author}/</p><p className="subspace" onClick={sendSubname} id={items.subspace}><Link to="/Subspacecreated"  style={{ textDecoration: 'none',color:'black'}}>{items.subspace}</Link></p>
       <img src={(votedon[i]===true) ? Upvotedone  : Upvotesvg}  className="upvoteicon" onClick={handleClick1} id={items._id} dataset={i} /><p className="upvotes" >{items.votes}</p> <img  src={(downvotedon[i]===true) ? Downvotedonesvg : Downvotesvg}  alt="arrow" className="downvoteicon" id={items._id} onClick={handleClick} dataset={i} /> <img src={Commentsvg} alt="popular" className="comment" onClick={showComments} /><p className="comments">{items.comments.length}</p> 
      <p className="posttext"onClick={navigateUser} id={items._id} >{items.heading}</p>
      <p  style={ (items.para===null)? { display:'none'} : {display : 'block'}} id="paraofcard">{items.para}</p>
      <img src={"https://spacesback-production.up.railway.app/"+items.imgpath} alt="popular" className="postimg" onClick={navigateUser} id={items._id} style={ (items.imgpath===null)? { display:'none'} : {display : 'block'} }  
 />
      
      </div>
    ) ) 
    
   }

     </div> 
      <div className={styles.userloginarea}><img src={Avatarsvg} alt="person" className={styles.avatar} /><p className={styles.username} >{username}</p><button className={styles.logoutbutton}><p className={styles.logouttext}>Logout</p></button></div>
      <div className="topcomm">
      <p className="topcommtext">Top Communities</p>
      <div className={styles.communityarea}>
{myspace.map((index,k)=>(
  <>
  <div className={styles.commcontainer}>
       <p className={styles.commnumber}>{k+1}</p><p className={styles.topcommname}>{index.name}</p><img src={Personsvg} alt="person" className={styles.personicon} /><p className={styles.topcommfollower}>{index.members}</p>
       </div>
       <div className={styles.secondline}></div>
       </>
)
)}
</div>
<div className={styles.firstline}></div>
<div className={styles.firstline1}></div>

        <p className="topcommviewtext"><Link to="/TopCommunities" style={{ textDecoration: 'none',color:'black'}}>View More</Link></p>
        <p className="topcommprivacy"><Link to="/Privacypolicy" style={{ textDecoration: 'none',color:'black'}}>Privacy Policy</Link></p>
        <p className="topcommagreement"><Link to="/Contentpolicy" style={{ textDecoration: 'none',color:'black'}}>Content Policy</Link></p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
    </div>
    </div>
      
)
}
export default Userloginpage;
