import React, { useState } from 'react';
import "./style.css";

const Main = () =>{
    // const[imgUrl , setUrl]=useState("");
    const[imgUrl , setUrl]=useState("https://cdn2.thecatapi.com/images/5Esmfiggi.jpg");
    const callImg =() =>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url))
        // .then(data=>console.log(data[0].url))
    }
  return (
    <>
    <div className="container">
<div className="box">
    <h2>Enjoy The Kitty 🐱</h2> <br></br>
    {/* <img src="Images/cat.jpg"/>  <br></br>  */}
    <img src={imgUrl}/><br></br> 
    <button onClick={()=> callImg()}>Click Me</button>
</div>
    </div>
    </>
  )
}

export default Main;
