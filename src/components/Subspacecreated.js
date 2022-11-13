import React  from "react";
import { Link } from "react-router-dom";
import styles from "./Userlogin.module.css"; 
import axios from "axios";
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"
import { useEffect, useState } from "react";
import Subspacerule from "./Subspacesrule";
import Sidebar from "./Sidebar";
import DesignA from"../images/Group 99.svg"
import DesignB from"../images/Group 100.svg"
import Pentagon from"../images/pentagon.svg"
import Tokentoheader from "./Tokentoheader";
import "./subspacecreated.css";
import { specialChars } from "@testing-library/user-event";

function Subspacecreated(){
  const[followed,setFollowed]=useState("")
  const[data,setData]=useState([{
    author:'',
   
    subspace:'',
    heading:'',
    imgpath:'',
     votes:'',
    _id:"",
    votes:'',
    comments:[],
  }])
  const[spacename,setSpacename]=useState('')
  const[spacedesci,setSpacedescri]=useState('')
  const[spacerules,setSpaceRules]=useState('')
  const[spaceimage,setSpaceimage]=useState('')
  const[spacefollow,setSpacefollow]=useState([])
    const fetchData = async() =>{
        Tokentoheader(localStorage.getItem("logintoken"))
        const subapi= 'https://spacesback-production.up.railway.app/s/'
        const subname=localStorage.getItem("spacename")
        let newsub=JSON.stringify(subname)
         const latestsub=newsub.replaceAll('"','');
         console.log(subapi+latestsub)
        await axios.get(subapi+latestsub).then((res) => {
        console.log(res)
       setData(res.data.posts)
       setFollowed(res.data.following)
       setSpacename(res.data.subspace.name)
       setSpacedescri(res.data.subspace.about)
       setSpaceRules(res.data.subspace.rules)
       setSpaceimage(res.data.subspace.imgpath)
       setSpacefollow(res.data.subspace.members)
       console.log(res.data.posts[0].upvoted)
     })
     console.error();
    };
       
        
    useEffect(() => {
      
      fetchData();
     
      
    }, [followed]);
    var unfollow={subspace:spacename}
    var follow={subspace:spacename}
    function Followuser(){
      if(followed===true){
        axios.put('https://spacesback-production.up.railway.app/s/unfollow',unfollow).then((res) => {
          console.log(res);
          setFollowed(res.data.msg)
      })
    }else{
      
        axios.put('https://spacesback-production.up.railway.app/s/follow',follow).then((res) => {
          console.log(res);
          setFollowed(res.data.msg)
      })
    }
    }
    

return(
    <div className={styles.home}>
      
        <Sidebar/>
          <div className="uppersection">
        <img src={DesignA} className="design" ></img >
        <img src={DesignB} className="design1"></img>
        <img src={Pentagon} className="penta"></img>
        <img src={"https://spacesback-production.up.railway.app/"+spaceimage} className="spaceimg"></img>
        <p className="spacename">{spacename}</p>
        <p className="members">{spacefollow.length}</p>
        <button className="followbtn" onClick={Followuser}><p className="follow">{(followed===true)?"Following":"Follow"}</p></button>
        </div>
        
      {data.map((posts)=>(
        <div className="cardsubspace1" >
      <p className="cardusername" >{posts.author}/</p><p className="subspace">{spacename}</p>
       <img src={Upvotesvg}  className="upvoteicon"  /><p className="upvotes1" >{posts.votes}</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon1"   /> <img src={Commentsvg} alt="popular" className="comment1" /><p className="comments2">{posts.comments.length}</p> 
      <p className="posttext">{posts.heading}</p>
      <img  className="postimg" src={"https://spacesback-production.up.railway.app/"+posts.imgpath} style={ (posts.imgpath===null)? { display:'none'} : {display : 'block'}} />
      
      </div>
      ))}
      <div className="rulessubspace1">
        <p className="description">Description</p>
        
        <p className="descriptiontext">{spacedesci}</p>
        <p className="rules1">Rules</p>
        
        <p className="rulestext">{spacerules}.</p> 
        

        <p className="topcommprivacy"><Link to="/Privacypolicy" style={{ textDecoration: 'none',color:'black'}}>Privacy Policy</Link></p>
        <p className="topcommagreement"><Link to="/Contentpolicy" style={{ textDecoration: 'none',color:'black'}}>Content Policy</Link></p>
        <p className="topcommcontact">Contact Us</p>
        <p className="topcommspace">2022 spaces</p>
    </div>
      </div>
)
}
export default Subspacecreated;