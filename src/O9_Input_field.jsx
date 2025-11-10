import { useState } from "react";

function Input(){
    const [val, setState]=useState("Farhan Hussain")
    return(
    
    <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
}}>
  <div style={{
    border: "3px solid black",
    width: "400px",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center"
  }}>
    <h1>Get Input value</h1>
    <input
      type="text"
      value={val}
      onChange={(event) => setState(event.target.value)}
      placeholder="Enter your name"
    />
    <h1>{val}</h1>
    <button
      style={{
        border: "3px solid red",
        color: "red",
        width: "100px",
        borderRadius: "10px",
        marginTop: "10px"
      }}
      onClick={() => setState("")}
    >
      Clear
    </button>
  </div>
</div>
    )
}

export default Input;