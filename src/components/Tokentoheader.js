
import axios from "axios";
const Tokentoheader=(token)=>{
   
    if(token){
       
        axios.defaults.headers={
            Authorization: token
            
        };
    }
    else{
        delete axios.defaults.headers.Authorization;
    }
};
export default Tokentoheader;