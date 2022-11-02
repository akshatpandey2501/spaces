import React from "react";
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import styles from "./Userlogin.module.css"; 
import Card from "../Card";
import Createpostsvg from "../images/pluscircle.svg"
import Createspacesvg from "../images/plussquare.svg"
import Avatarsvg from "../images/Group 71.svg"
function Userloginpage(){
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
        <Sidebar/>
        <Topcomm/>
        <div className={styles.create}><img src={Createpostsvg} alt="person" className={styles.posticon} /><img src={Createspacesvg} alt="person" className={styles.spaceicon} /><button className={styles.createpostbutton}><p className={styles.createpost}>Create Post</p></button><button className={styles.createspacebutton} ><p className={styles.createspace}>Create Subspace</p></button></div>
        <p className={styles.Posts}>All Posts</p>
       <Card className="cardbox" />
       <div className={styles.userloginarea}><img src={Avatarsvg} alt="person" className={styles.avatar} /><p className={styles.username}>Akshat123</p><button className={styles.logoutbutton}><p className={styles.logouttext}>Logout</p></button></div>
    </div>
)
}
export default Userloginpage;