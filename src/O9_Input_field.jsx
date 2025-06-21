import { useState } from "react";

function Input(){
    const [val, setState]=useState("Farhan Hussain")
    return(
        <div>
            <h1>Get Input value</h1>
            <input type="text" value={val} onChange={(event)=>{setState(event.target.value)}} placeholder="Enter your name" />

        <h1>{val}</h1>

        <button onClick={()=>{setState("")}}>click</button>

        </div>
    )
}

export default Input;