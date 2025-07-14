import { useState } from "react"

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
            <button onClick={IncreaseCount}>Count Increase</button>
            <button onClick={DecreseCount}>Count Decresed</button>
        </div>
    )
}

export default Counter;