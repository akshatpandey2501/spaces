import React from "react";
import styles from "./Userlogin.module.css"; 
import Card from "./Card";

import Avatarsvg from "../images/Group 71.svg"
import Subspacerule from "./Subspacesrule";
import Sidebar from "./Sidebar";
function Subspacecreated(){
    // const styles={
    //     boxsizing: 'border-box',
    //     position : 'absolute',
    //     width : '846px',
    //     height : '373px',
    //     left : '297px',
    //     top : '167px'
        
    // }
return(
    <div className={styles.home}>
        <Subspacerule/>
        <Sidebar/>
        
        <p className={styles.Posts}>All Posts</p>
       <Card className="cardbox" />
       <div className={styles.userloginarea}><img src={Avatarsvg} alt="person" className={styles.avatar} /><p className={styles.username}>Akshat123</p><button className={styles.logoutbutton}><p className={styles.logouttext}>Logout</p></button></div>
    </div>
)
}
export default Subspacecreated;