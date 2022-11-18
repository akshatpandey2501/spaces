import React, { useState } from "react"
import "./showpost.css"
import { Link } from "react-router-dom"
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"
import Sidebar from "./Sidebar"
import Rulessidebar from "./Rulessidebar"
import axios from "axios"
import { useEffect } from "react"
import Tokentoheader from "./Tokentoheader"
import Replysvg from "../images/cornerupleft.svg"
import Searchsvg from "../images/search.svg"

function Showpost(){
  const[imgpath,setImgpath]=useState("")
 const[para,setPara]=useState("")
 const[createdAt,setcreatedAt]=useState('')
  const [username,setUsername]=useState("")
  const[comments,setComments]=useState([])
  const[heading,setHeading]=useState("")
  const [subspace,setSpace]=useState("")
   var api='https://spacesback-production.up.railway.app/p/logged/'
    var iddata=JSON.stringify(localStorage.getItem("idpost"))
   const newid = iddata.replaceAll('"','');
    const fetchData = async() =>{
        Tokentoheader(localStorage.getItem("logintoken"))
        await axios.get(api+newid).then((res) => {
        console.log(res)
        setUsername(res.data.author)
        setComments(res.data.comments)
        setHeading(res.data.heading)
        setSpace(res.data.subspace)
        setImgpath(res.data.imgpath)
        setPara(res.data.para)
        setcreatedAt(res.data.createdAt)
     }).catch(e => {
      console.log(e);
     })
    };

       useEffect(() => {
      Tokentoheader(localStorage.getItem("logintoken"))
      fetchData();
       }, []);
    const[commentvalue,setCommentsvalue]=useState([{
      author:"",
      parentId: '',     
      text: '',
      votes:"",
     _id:"",
}])
clonecomments=[...commentvalue]
     const fetchData1 = async() =>{
        var api2='https://spacesback-production.up.railway.app/c/'

        await axios.get(api2+newid+'/comments').then((res) => {
        console.log(res)
        setCommentsvalue(res.data)
     
     }).catch(e => {
      console.log(e);
     })
    };

    useEffect(() => {
      
      fetchData1();
      
      
    }, []);  
    const[search,setSearch]=useState()
const handleSearch=e=>{
       setSearch(e.target.value)

}
const[searchresult,setSearchResult]=useState([])
var searchdata={text:search}
const fetchData3 = async() =>{
        
  await axios.post('https://spacesback-production.up.railway.app/s/search',searchdata).then((res) => {
  console.log(res)
 setSearchResult(res.data)
   console.log(search)

})
console.error();
}; 
useEffect(() => {
fetchData3();
},  [search]);
var clonecomments
    const[comment,setComment]=useState()
   function changeComment(e){
    setComment(e.target.value)
   }
   var sendcomment={postId:localStorage.getItem("idpost"),text:comment}
function postComment(e){
  e.preventDefault()
  setComment("")
 
  if(comment!==""){
  Tokentoheader(localStorage.getItem("logintoken"))
  axios.post('https://spacesback-production.up.railway.app/c/comment',sendcomment).then((res) => {
          console.log(res);
     if (res.status === 200) {
        console.log("yess")
            
          }
        })
        .catch((err) => {
          console.log(err);
          })
         var commentlength=maincomment.length
          clonecomments[commentlength].text=comment
          setCommentsvalue(clonecomments) 
        }
}

var copyarr
const [arr,setArr]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
var id;
var iteration
const[count,setcount]=useState(1)
function ReplyClicked(e){
 id=e.currentTarget.id
 iteration=e.target.getAttribute("dataset")
 copyarr=[...arr]
 if(count%2!==0){
copyarr[iteration]=1
setArr(copyarr)
setcount(2)
 }
 else if(count%2===0){
  copyarr[iteration]=0
  setArr(copyarr)
  setcount(1) 
 }
let replycommentt=document.querySelectorAll(`[dataset=${id}]`)
replycommentt.forEach((child)=> child.classList.toggle("opened"));

}

function takeTosubspace(e){
  if(localStorage.getItem("spacename")!==null){
    localStorage.removeItem("spacename")
  }
  localStorage.setItem("spacename",e.currentTarget.id)
}
var replyycomments;
function getReplies(id){
 replyycomments=commentvalue.filter((replyycomments)=>replyycomments.parentId===id)
 console.log(replyycomments)  
}
const maincomment=commentvalue.filter((maincomment)=>maincomment.parentId===null);
const timenow = Date.now(); 
return(
    <>
   <Sidebar/>
    <Rulessidebar/>
    <img src={Searchsvg} alt="search" className="searchicon" /><input type="search" id="search" className="search" onChange={handleSearch} value={search} placeholder="Search" />

    <>
    <div className="subspacecard">
          {searchresult.map((searches)=>( 
           
           <p className="subspaces"><Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={searches} onClick={takeTosubspace}>{searches}</Link></p>
           
            
          ))}
           </div>
          </>
    <div id="card1">
      <p className="cardusername">{(Math.floor((timenow-createdAt)/3600000)<24)?(Math.floor((timenow-createdAt)/3600000)+"hours ago by"):(Math.floor((timenow-createdAt)/(3600000*24))+"days ago by")}{username}/</p><p className="subspace">{subspace}</p>
       <img src={Upvotesvg} alt="popular" className="upvoteicon" /><p className="upvotes"></p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{comments.length}</p> 
      <p className="posttext">{heading}</p>
      <p  style={ (para===null)? { display:'none'} : {display : 'block'}} id="paraofcard">{para}</p>
      <img src={"https://spacesback-production.up.railway.app/"+imgpath} alt="popular" className="postimg"  style={ (imgpath===null)? { display:'none'} : {display : 'block'} }   />
      <div className="inputarea"><input type="text" className="commentinput" onChange={changeComment} value={comment} /><button className="postbtn" onClick={postComment} ><p className="postbutton">Comment</p></button></div>
      
    </div>
      <div className="container1" >
    
      {maincomment.map((elem,index)=>(
       
       <div className="commentcontainer opened" >
        
          <div className="commentcard">
            <p className="ourcomment">
              {elem.text}
            </p>
            <div className="commentsfooter">
           
             <p className="userinfo">{elem.author}</p>
             <img src={Replysvg} className="replyimg" id={"firstcomment"+index} replies={getReplies(elem._id)} ></img ><p className="noofreply"></p>

            </div>
          </div>
        
     
      
         {replyycomments.length>0 &&(
         <>
            {replyycomments.map((reply,i)=>(
          <div className="commentcontainer opened" dataset={"firstcomment"+index} id={"firstreply"}>
          <div className="commentcard">  
            <p className="ourcomment">
            {reply.text}
            </p>
            <div className="commentsfooter">
            
             <p className="userinfo">{reply.author}</p>
             <img src={Replysvg} className="replyimg"  id={"firstreply"} onClick={ReplyClicked} dataset={i}></img ><p className="noofreply"></p>
             </div>
             <input type="text" style={{display: arr[i]===1 ? 'block' : 'none'}} />
          </div>
          
          <div className="commentcontainer" dataset={"firstreply"} id="replykareply">
          <div className="commentcard">
            <p className="ourcomment">
             akdhat
            </p>
            <div className="commentsfooter">
             <p className="userinfo"></p>
             <img src={Replysvg} className="replyimg" ></img ><p className="noofreply"></p>

            </div>
          </div>
          </div>
        </div>

))}
</>
         )}
        </div>
          ))} 
      
       </div>
</>
)
}

export default Showpost;