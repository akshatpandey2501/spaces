import React from "react";
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import Pointersvg from "../images/Points.svg"
import "./privacypolicy.css"
function Privacyandpolicy(){
    return(
        <div>
            <Sidebar/>
         <Topcomm/>
        <div className="policysection">
         <p className="policyheading">Spaces Privacy Policy</p>
         <p className="mustuse">We use information about you to:</p>
         <img className="Pointer1" src={Pointersvg} alt="login img"/><p className="point1">Provide, maintain, and improve the Services;</p>
         <img className="Pointer2" src={Pointersvg} alt="login img"/><p className="point2">Help protect the safety of Reddit and our users, which includes blocking suspected spammers, addressing abuse, and enforcing the Reddit User Agreement and our other policies;</p>
         <img className="Pointer3" src={Pointersvg} alt="login img"/><p className="point3">Provide customer service;</p>
         <img className="Pointer4" src={Pointersvg} alt="login img"/><p className="point4">Monitor and analyze trends, usage, and activities in connection with our Services;</p>
         <img className="Pointer5" src={Pointersvg} alt="login img"/><p className="point5">Personalize the Services, and provide and optimize content, and features that match user profiles or interests.</p>
         <p className="point6">Much of the information on the Services is public and accessible to everyone, even without an account. By using the Services, you are directing us to share this information publicly and freely.</p>
        <p className="point7">Your Reddit account has a profile page that is public. Your profile contains information about your activities on the Services, such as your username, prior posts and comments, karma, awards received, trophies, moderator status, Reddit Premium status, and how long you have been a member of the Services. You can also choose for your profile to include the content you upvote and downvote.</p>
        <p className="protect">How We Protect Your Information</p>
        <p className="point9">We take measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction. For example, we use HTTPS while information is being transmitted. We also enforce technical and administrative access controls to limit which of our employees have access to nonpublic personal information.</p>
        <p className="point10">We store the information we collect for as long as it is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
</p>
        </div>
        </div>
    )
}
export default Privacyandpolicy;