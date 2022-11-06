import React from "react";
import Sidebar from "./Sidebar";
import Topcomm from "./Topcomm";
import Pointersvg from "../images/Points.svg"
import "./contentpolicy.css"
function Contentpolicy(){
    return(
        <div>
            <Sidebar/>
         <Topcomm/>
        <div className="contentpolicysection">
         <p className="contenpolicyheading">Spaces Content Policy</p>
         <p className="policy">Reddit is a vast network of communities that are created, run, and populated by you, the Reddit users.

Through these communities, you can post, comment, vote, discuss, learn, debate, support, and connect with people who share your interests, and we encourage you to find—or even create—your home on Reddit.

While not every community may be for you (and you may find some unrelatable or even offensive), no community should be used as a weapon. Communities should create a sense of belonging for their members, not try to diminish it for others. Likewise, everyone on Reddit should have an expectation of privacy and safety, so please respect the privacy and safety of others.

Every community on Reddit is defined by its users. Some of these users help manage the community as moderators. The culture of each community is shaped explicitly, by the community rules enforced by moderators, and implicitly, by the upvotes, downvotes, and discussions of its community members. Please abide by the rules of communities in which you participate and do not interfere with those in which you are not a member.

Below the rules governing each community are the platform-wide rules that apply to everyone on Reddit. These rules are enforced by us, the admins.

Reddit and its communities are only what we make of them together, and can only exist if we operate by a shared set of rules. We ask that you abide by not just the letter of these rules, but the spirit as well.</p>
       <p className="rules">Rules</p>
         <img className="contentPointer1" src={Pointersvg} alt="login img"/><p className="contentpoint1">Abide by community rules. Post authentic content into communities where you have a personal interest, and do not cheat or engage in content manipulation (including spamming, vote manipulation, ban evasion, or subscriber fraud) or otherwise interfere with or disrupt Reddit communities.</p>
         <img className="contentPointer2" src={Pointersvg} alt="login img"/><p className="contentpoint2">Respect the privacy of others. Instigating harassment, for example by revealing someone’s personal or confidential information, is not allowed. Never post or threaten to post intimate or sexually-explicit media of someone without their consent.</p>
         <img className="contentPointer3" src={Pointersvg} alt="login img"/><p className="contentpoint3">Do not post or encourage the posting of sexual or suggestive content involving minors.
</p>
         <img className="contentPointer4" src={Pointersvg} alt="login img"/><p className="contentpoint4">You don’t have to use your real name to use Reddit, but don’t impersonate an individual or an entity in a misleading or deceptive manner.</p>
         <img className="contentPointer5" src={Pointersvg} alt="login img"/><p className="contentpoint5">Ensure people have predictable experiences on Reddit by properly labeling content and communities, particularly content that is graphic, sexually-explicit, or offensive.</p>
         <img className="contentPointer6" src={Pointersvg} alt="login img"/><p className="contentpoint6">Keep it legal, and avoid posting illegal content or soliciting or facilitating illegal or prohibited transactions.</p>
         <img className="contentPointer7" src={Pointersvg} alt="login img"/><p className="contentpoint7">Don’t break the site or do anything that interferes with normal use of Reddit.</p>
       

       </div>
        </div>
    )
}
export default Contentpolicy;