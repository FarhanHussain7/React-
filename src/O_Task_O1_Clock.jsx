import { useState } from "react";
import Time from "./O_Task_O1";

function Clock(){
    const [color, setColor]=useState('green');
    return(
        <div>
            <h1>Using Props Create Clock</h1>

            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"green"}>Green</option>
                <option value={"black"}>Black</option>
                <option value={"Orange"}>Orange</option>
            </select>
        
        <Time color={color}/>
        </div>
    )
}

export default Clock;