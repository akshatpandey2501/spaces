import React, { useState } from "react"
import "./showpost.css"
import { Link } from "react-router-dom"
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"
import Sidebar from "./Sidebar"
import Rulessidebar from "./Rulessidebar"
import axios from "axios"
import Avatarsvg from "../images/Group 71.svg"
import { useEffect } from "react"
import Tokentoheader from "./Tokentoheader"
import Replysvg from "../images/cornerupleft.svg"
import Searchsvg from "../images/search.svg"
import Downvotedonesvg from "../images/downvotedone.svg"
import Upvotedone from "../images/upvotedone.svg"
function Showpost(){
  const[imgpath,setImgpath]=useState("")
 const[para,setPara]=useState("")
 const[idd,setId]=useState('')
 const[createdAt,setcreatedAt]=useState('')
  const [username,setUsername]=useState("")
  const[comments,setComments]=useState([])
  const[heading,setHeading]=useState("")
  const [subspace,setSpace]=useState("")
  const [votes,setVotes]=useState()
  const [upvoted,setUpvotes]=useState()
  const [downvoted,setDownvoted]=useState()
   var api='https://spacesback-production.up.railway.app/p/logged/'
    var iddata=JSON.stringify(localStorage.getItem("idpost"))
   const newid = iddata.replaceAll('"','');
    const fetchData = async() =>{
        Tokentoheader(localStorage.getItem("logintoken"))
        await axios.get(api+newid).then((res) => {
        console.log(res)
        setUsername(res.data.post.author)
        setComments(res.data.post.comments)
        setHeading(res.data.post.heading)
        setSpace(res.data.post.subspace)
        setImgpath(res.data.post.imgpath)
        setPara(res.data.post.para)
        setcreatedAt(res.data.post.createdAt)
        setVotes(res.data.post.votes)
        setUpvotes(res.data.upvoted)
        setDownvoted(res.data.downvoted)
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
var votess=votes
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
var boolvoted= upvoted
var boolunvoted= downvoted
var postid1=idd
function Upvote(){
  boolvoted=!boolvoted
  setUpvotes(boolunvoted)
  Tokentoheader(localStorage.getItem("logintoken"))
  if(!upvoted){
    if(downvoted===true){
      votess+=2
      setVotes(votess)
      boolunvoted=!boolunvoted
      setDownvoted(boolunvoted)
    }
    else if(downvoted===false){
      votess+=1
      setVotes(votess)
    }
    axios.put('https://spacesback-production.up.railway.app/p/upvote',postid1).then((res) => {
      console.log(res);
     
    })
    .catch((err) => {
      console.log(err)
          })
  }
  else{ 
    votess-=1
    boolunvoted=!boolunvoted
    setDownvoted(boolunvoted)
    setVotes(votess)
    axios.put('https://spacesback-production.up.railway.app/p/unupvote',postid1).then((res) => {
          
         
    })
    .catch((err) => {
      console.log(err)
          })
         
         
  }
}
var postid=idd


function Downvote(){
  Tokentoheader(localStorage.getItem("logintoken"))
  if(!downvoted){
    boolunvoted=!boolunvoted
    setDownvoted(boolunvoted)
    axios.put('https://spacesback-production.up.railway.app/p/downvote',postid).then((res) => {
      console.log(res);
      
    })
    .catch((err) => {
      console.log(err)
          })
    if(upvoted===true){
      votess-=2
      setVotes(votess)
     boolvoted=!boolunvoted
     setUpvotes(boolvoted)
    }
    else if(upvoted===false){
      votess-=1
      setVotes(votess)
    }
  }
  else{
    axios.put('https://spacesback-production.up.railway.app/p/undownvote',postid).then((res) => {
      console.log(res);
      
    })
    boolunvoted=!boolunvoted
    setDownvoted(boolunvoted)
    .catch((err) => {
      console.log(err)
          })
          votes+=1
          setVotes(votess)
  }
}
var myuser=localStorage.getItem("userkanaam")
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
const[replyvalue,setReplyvalue]=useState("")
const[replykareply,setReplykareply]=useState("")
var copyarr1
var copyarr
const [arr1,setArr1]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
const [arr,setArr]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
var id;
var iteration
var id1;
var iteration1
const[count1,setcount1]=useState(1)
function ReplyClicked1(e){
 id1=e.currentTarget.id
 iteration1=e.target.getAttribute("dataset")
 copyarr1=[...arr1]
 if(count1%2!==0){
copyarr1[iteration1]=1
setArr1(copyarr1)
setcount1(2)
 }
 else if(count1%2===0){
  copyarr1[iteration1]=0
  setArr1(copyarr1)
  setcount1(1) 
 }

}
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
function setCommentsvaluearray(event){
  setReplyvalue(event.target.value)
}
function setReplykabhi(e){
 setReplykareply(e.target.value)  
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
var replyycommentofcomment;
function getReplies1(id){
 replyycommentofcomment=commentvalue.filter((replyycomments)=>replyycomments.parentId===id)
 console.log(replyycomments)  
}
const maincomment=commentvalue.filter((maincomment)=>maincomment.parentId===null);
const timenow = Date.now(); 
function submitReply(e){
  Tokentoheader(localStorage.getItem("logintoken"))
  var replyapi= 'https://spacesback-production.up.railway.app/c/'
  var replyid=e.currentTarget.id
  var postdata={"text":replyvalue} 
  axios.post(replyapi+replyid,postdata).then((res) => {
    console.log(res)
   
 
 }).catch(e => {
  console.log(e);
 })
 window.location.reload(false)
};
function submitReply1(e){
  Tokentoheader(localStorage.getItem("logintoken"))
  var replyapi1= 'https://spacesback-production.up.railway.app/c/'
  var replyid1=e.currentTarget.id
  var postdata1={"text":replykareply} 
  axios.post(replyapi1+replyid1,postdata1).then((res) => {
    console.log(res)
   
    window.location.reload(false)
 }).catch(e => {
  console.log(e);
 })
};

return(
    <>
   <Sidebar/>
    <Rulessidebar/>
    <img src={Searchsvg} alt="search" className="searchicon" /><input type="search" id="search" className="search" onChange={handleSearch} value={search} placeholder="Search" />
    <div className="createspaceuserloginarea"><img src={Avatarsvg} alt="person" className="createspaceavatar" /><p className="createspaceusername">{myuser}</p><button className="createspacelogoutbutton"><p className="createspacelogouttext">Logout</p></button></div>
     
     
    <>
    
    <div className="subspacecard">
          {searchresult.map((searches)=>( 
           
           <p className="subspaces"><Link to="/Subspacecreated" style={{ textDecoration: 'none',color:'black'}} id={searches} onClick={takeTosubspace}>{searches}</Link></p>
           
            
          ))}
           </div>
          </>
    <div id="card1">
      <p className="cardusername">{(Math.floor((timenow-createdAt)/3600000)<24)?(Math.floor((timenow-createdAt)/3600000)+"hours ago by"):(Math.floor((timenow-createdAt)/(3600000*24))+"days ago by")}{username}/</p><p className="subspace">{subspace}</p>
       <img src={(upvoted===true) ? Upvotedone  : Upvotesvg} alt="popular" className="upvoteicon" onClick={Upvote} /><p className="upvotes">{votes}</p> <img src={(downvoted===true) ? Downvotedonesvg : Downvotesvg} alt="arrow" className="downvoteicon" onClick={Downvote} /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{comments.length}</p> 
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
             <img src={Replysvg} className="replyimg" replies={getReplies(elem._id)} onClick={ReplyClicked1} dataset={index}></img ><p className="noofreply"></p>

            </div>
            
             <input type="text" value={replyvalue} onChange={setCommentsvaluearray} className="commentsinput" style={{display: arr1[index]===1 ? 'block' : 'none'}} /><button style={{display: arr1[index]===1 ? 'block' : 'none'}} onClick={submitReply} dataset={index} id={elem._id}className="replybuttoncomments">Reply</button>
          
          </div>
         
     
      
         {replyycomments.length>0 &&(
         <>
            {replyycomments.map((reply,i)=>(
          <div className="commentcontainer opened"  id={"firstreply"}>
          <div className="commentcard">  
            <p className="ourcomment">
            {reply.text}
            </p>
            <div className="commentsfooter">
            
             <p className="userinfo">{reply.author}</p>
             <img src={Replysvg} className="replyimg"  id={"firstreply"} replies={getReplies1(reply._id)} onClick={ReplyClicked} dataset={i}></img ><p className="noofreply"></p>
             </div>
             <input type="text" className="replycommentsinput" style={{display: arr[i]===1 ? 'block' : 'none'}} value={replykareply} onChange={setReplykabhi} /><button style={{display: arr[i]===1 ? 'block' : 'none'}} id={reply._id} className="replybuttoncommentsofcomments" onClick={submitReply1}>Reply</button>
          </div>
          {replyycommentofcomment.length>0 &&(
         <>  
          {replyycommentofcomment.map((reply,i)=>(
          <div className="commentcontainer opened" dataset={"firstr"} id="replykareply">
          <div className="commentcard">
            <p className="ourcomment">
             {reply.text}
            </p>
            <div className="commentsfooter">
             <p className="userinfo">{reply.author}</p>
             <img src={Replysvg} className="replyimg" ></img ><p className="noofreply"></p>

            </div>
          </div>
          </div>))}
          </>)}
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