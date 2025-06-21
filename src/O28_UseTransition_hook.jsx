// it will set transaction during the button click

import { startTransition, useTransition } from "react"

function Transition(){
    const [pending,startTransition]=useTransition();
    
    const handleButton= ()=>{
        startTransition(async ()=>{
            await new Promise(res=>setTimeout(res, 5000));
        })
    }
    return(
        <div>
            <h1>useTransition hook in React js </h1>
            {
                pending?<h3>loading <img src="/vite.svg" alt="" /></h3>:null
            }
            <button disabled={pending} onClick={handleButton}>click</button>
        </div>
    )
}

export default Transition;