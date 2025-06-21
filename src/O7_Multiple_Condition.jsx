import { useState } from "react"

function MultiCond() {
    const [count, setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Set Count</button>
            {
                count==0?<h1>Condition 0</h1>
                :count==1?<h2>Condition 1</h2>
                :count==2?<h3>Condition 2</h3>
                :count==3?<h4>Condition 3</h4>
                :count==4?<h5>Condition 4</h5>
                :<h6>Other condition</h6>
            }
        </div>
    )
}
export default MultiCond;