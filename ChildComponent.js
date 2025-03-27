import React from "react";

const ChildComponent = ({ image, onUpdate }) => {
  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "10px", textAlign: "center" }}>
      <h2>Child Component</h2>
      <img src={image} 
      alt="Travel Destination" style={{ width: "150px", height: "150px" }} />
      <br />
      <button onClick={onUpdate} style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}>
        Next Image 🔄
      </button>
    </div>
  );
};

export default ChildComponent;
