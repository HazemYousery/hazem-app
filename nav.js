import React from "react";
//import {Link} from "react-router-dom";

import './App.css'
const Nav = ()=>{
return(
    <div className="navbar"> 
       <div className="container">
       <ul>
       <a href = '#' className="logo">Logo</a>
       </ul>
<ul><a href = "/Home" className="logo-1" />Home</ul>
    <ul><a href = "/About" className="logo-2" />About</ul>
    </div>
    </div>
);
}
export default Nav;