import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App(){
    return(
       <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
        </Routes>
        </div>
    );
}
export default App;