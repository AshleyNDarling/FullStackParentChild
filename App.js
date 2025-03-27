
import React, { useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent"; // ✅ Importing the child component

import brazil from "./assests/brazil.jpg";
import southafricaflag from "./assests/southafricaflag.jpg";
import australianflag from "./assests/australianflag.jpg";

import pink from "./assests/pink.jpg";
import orange from "./assests/orange.jpg";
import purple from "./assests/purple.jpg";


function App() {
  
const images1 = [brazil, southafricaflag, australianflag];
const images2 = [pink, orange, purple];
  const [imageIndex1, setImageIndex1] = useState(0); // Track which image is shown
  const [imageIndex2, setImageIndex2] = useState(0);


  // Function to cycle through images
  const changeImage1 = () => {
    setImageIndex1((prevIndex) => (prevIndex + 1) % images1.length); // Loop back after last image
  };
  
  const changeImage2 = () => {
    setImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  }
  //const changeImage2 = () => {
   // setImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  //};



  return (
    <div className="App">
      <h1>Where will i travel to next??? 🚀</h1>
      <img src={images1[imageIndex1]} alt="Destinations" width="300" /> {/* Pass props */}
      <br />
      <button onClick={changeImage1}>CLICK FOR A SURPRISE</button>


      <h2> What color is best?! </h2>
    
      <img src={images2[imageIndex2]} alt="colors" width="300" />
      <br />
      <button onClick={changeImage2}>Next Color! </button>


    </div>
  );
}

export default App;

