import React from "react"

import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"

function Createcard(){
 const Data =localStorage.getItem("data")  

return(<>
   { Data? (Data.map
   ((items)=>
    <div className="card">
      <p className="cardusername"></p>{items.author}<p className="subspace">{items.subspace}</p>
       <img src={Upvotesvg} alt="popular" className="upvoteicon" /><p className="upvotes">{items.upvotes.length-items.downvotes.length}</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">{items.comments.lengt}</p> 
      <p className="posttext">{items.heading}</p>
      <img src={items.imgpath} alt="popular" className="postimg" />
      </div>)
   ):("loading..")
    }
    </>
    )
}

export default Createcard;