import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Nav from "./components/Nav.js";

import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
     <Nav />
     </BrowserRouter> */}
     <BrowserRouter>
     <App />
     </BrowserRouter>
  </React.StrictMode>
);

