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
  const [username,setUsername]=useState("")
  const[comments,setComments]=useState([])
  const[heading,setHeading]=useState("")
  const [subspace,setSpace]=useState("")
   const [commentsnumber,setcommentNumber]=useState(0)
   var api='https://spacesback-production.up.railway.app/p/'
    var iddata=JSON.stringify(localStorage.getItem("idpost"))
   const newid = iddata.replaceAll('"','');
    const fetchData = async() =>{
        
        await axios.get(api+newid).then((res) => {
        console.log(res)
        setUsername(res.data.author)
        setComments(res.data.comments)
        setHeading(res.data.heading)
        setSpace(res.data.subspace)
        setImgpath(res.data.imgpath)
        setPara(res.data.para)
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
      childId:[],
      text: "",
      votes:"",
     _id:"",
}])
     const fetchData1 = async() =>{
        var api2='https://spacesback-production.up.railway.app/c/'

        await axios.get(api2+newid+'/comments/'+commentsnumber).then((res) => {
        console.log(res)
        setCommentsvalue(res.data.comments)
     
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
 
    const[comment,setComment]=useState()
   function changeComment(e){
    setComment(e.target.value)
   }
   var sendcomment={postId:localStorage.getItem("idpost"),text:comment}
function postComment(e){
  e.preventDefault()
  setComment("")
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
}

var id;
var replyarray=[]
var result=[]
const [apiid,setApiid]=useState('')
const[replyvalue,setReplyvalue]=useState([{
  author:"",
  childId:[],
  text: "",
  votes:"",
 _id:"",
}])
var replynumber;
var iteration
function ReplyClicked(e){
  setApiid(e.target.getAttribute("dataset")) 
 id=e.currentTarget.id
iteration=e.target.getAttribute("data-value")
let replycomment=document.querySelectorAll(`[dataset=${id}]`)
replycomment.forEach((child)=> child.classList.toggle("opened"));

}
const fetchData2 = async() =>{
 replynumber=0
    await axios.get('https://spacesback-production.up.railway.app/c/'+apiid+'/'+replynumber).then((res) => {
  console.log(res)
  replyarray[iteration]=res.data.comments
  result = replyarray.map(element => element.slice(iteration));
  console.log(replyarray)
 

}).catch(e => {
console.log(e);
})
};

useEffect(() => {
fetchData2();
},[apiid]); 
function takeTosubspace(e){
  if(localStorage.getItem("spacename")!==null){
    localStorage.removeItem("spacename")
  }
  localStorage.setItem("spacename",e.currentTarget.id)
}
var idrequired=commentvalue.__id
    
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
    <div className="card1">
      <p className="cardusername">{username}/</p><p className="subspace">{subspace}</p>
       <img src={Upvotesvg} alt="popular" className="upvoteicon" /><p className="upvotes"></p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{comments.length}</p> 
      <p className="posttext">{heading}</p>
      <p  style={ (para===null)? { display:'none'} : {display : 'block'}} id="paraofcard">{para}</p>
      <img src={"https://spacesback-production.up.railway.app/"+imgpath} alt="popular" className="postimg"  style={ (imgpath===null)? { display:'none'} : {display : 'block'} }   />
      
    </div>
      <div className="container1" >
    
      {commentvalue.map((elem,i)=>(
        
       <div className="commentcontainer opened" id={"firstcomment"}>
        
          <div className="commentcard">
            <p className="ourcomment">
              {elem.text}
            </p>
            <div className="commentsfooter">
            <div className="inputdiv" dataset={"firstcomment"+i} ><input type="text" className="replyinput" onChange={changeComment} value={comment} dataset={"firstcomment"+i} /><button className="replybtn" onClick={postComment} dataset={"firstcomment"+i} id={elem._id}><p className="replybutton" dataset={"firstcomment"+i}>Post</p></button></div>
             <p className="userinfo">{elem.author}</p>
             <img src={Replysvg} className="replyimg" id={"firstcomment"+elem._id} onClick={ReplyClicked} data-value={i} dataset={elem._id}></img ><p className="noofreply"></p>

            </div>
          </div>
        
     
      
      { result.map((reply)=>(<>
          <div className="commentcontainer" dataset={"firstcomment"+elem._id} id={"firstreply"}>
          <div className="commentcard">
                      

            <p className="ourcomment">
           {reply}
            </p>
            <div className="commentsfooter">
            <div className="inputdiv" ><input type="text" className="replyinput" onChange={changeComment} value={comment} /><button className="replybtn" onClick={postComment} ><p className="replybutton">Post</p></button></div>
             <p className="userinfo"></p>
             <img src={Replysvg} className="replyimg"  id={"firstreply"} onClick={ReplyClicked}></img ><p className="noofreply"></p>

            </div>
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
        </>  ))}
        </div>
          ))} 
      
       </div>
  
          
      
      <div className="inputarea"><input type="text" className="commentinput" onChange={changeComment} value={comment} /><button className="postbtn" onClick={postComment} ><p className="postbutton">Post</p></button></div>
      
</>
)
}

export default Showpost;