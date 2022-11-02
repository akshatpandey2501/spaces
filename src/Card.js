import React from "react";
import Commentsvg from "./images/message-square.svg"
import Upvotesvg from "./images/arrowup.svg"
import Downvotesvg from "./images/arrowdown.svg"
import Postimg from"./images/postimg.svg"
import "./card.css";

function Card(){
    return(
        <div className="card">
         <img src={Upvotesvg} alt="popular" className="upvoteicon" /><p className="upvotes">24k</p> <img src={Downvotesvg} alt="arrow" className="downvoteicon" /> <img src={Commentsvg} alt="popular" className="comment" /><p className="comments">24k</p> 
        <p className="posttext">This is the beauty of games ,it connects everyone .. These kids from my apartment just dropped by requesting me to put Minecraft for them ,i'm happy that my gaming rig is being put to good use</p>
        <img src={Postimg} alt="popular" className="postimg" />
        </div>
    )
}
export default Card;