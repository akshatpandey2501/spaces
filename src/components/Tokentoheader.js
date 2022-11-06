
import axios from "axios";
const Tokentoheader=(token)=>{
   
    if(token){
        console.log(token)
        axios.defaults.headers={
            Authorization: token
            
        };
    }
    else{
        delete axios.defaults.headers.n;
    }
};
export default Tokentoheader;