import { useEffect, useState } from "react";

const Time = ({color})=>{
    const [time, setTime]=useState('0');

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }
)
    return(
        <div>
            <div>
                <h1 style={{color:color, border:"2px solid black", background:"white", borderRadius:"10px", width:"200px"}}
                >{time}</h1>
            </div>
        </div>
    )
}
export default Time;