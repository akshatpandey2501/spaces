import React from "react";
import Commentsvg from "../images/message-square.svg"
import Upvotesvg from "../images/arrowup.svg"
import Downvotesvg from "../images/arrowdown.svg"
import Postimg from"../images/postimg.svg"
import styles from "./Card.module.css"; 

function Card(props){
    
    return(
        
        <div className={props.className}>
         <img src={Upvotesvg} alt="popular" className={styles.upvoteicon} /><p className={styles.upvotes}>24k</p> <img src={Downvotesvg} alt="arrow" className={styles.downvoteicon} /> <img src={Commentsvg} alt="popular" className={styles.comment} /><p className={styles.comments}>24k</p> 
        <p className={styles.posttext}>This is the beauty of games ,it connects everyone .. These kids from my apartment just dropped by requesting me to put Minecraft for them ,i'm happy that my gaming rig is being put to good use</p>
        <img src={Postimg} alt="popular" className={styles.postimg} />
        </div>
    )
}
export default Card;