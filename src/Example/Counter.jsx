import { useState } from "react"
// import style from './css/Css_profile.module.css';

const Counter=()=>{
    const [count, setCount]=useState(0);

    const IncreaseCount=()=>{
        setCount(count+1)
    }

    const DecreseCount=()=>{
        if (count>0) {
            setCount(count-1)
        }
    }
    return(
        <div>
            <h1>Counter :{count}</h1>
            <button style={{border:"2px solid blue", color:"green", margin:"10px"}} onClick={IncreaseCount}>Count Increase</button>
            <br/>
            <button style={{border:"2px solid red", color:"red", margin:"10px"}} onClick={DecreseCount}>Count Decresed</button>
        </div>
    )
}

export default Counter;