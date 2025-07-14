import { useState } from "react"
import Header from "./O3_ArrayData";
function Toggle() {
    const [display, setDisplay]=useState(true);
    return(
        <div>
            <h1>Toggle Or Hide and Show</h1>
            <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
         {
              display? <h1>Farhan Hussan</h1>:null
            //    display? <Headers/>:null
       } 

        </div>
    )
}

export default Toggle;