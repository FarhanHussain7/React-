// Controlled component means that we have input field in our file and this input field are controlled by the state

import { useState } from "react";

function Component(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    return(
        <div>
            <h1>Controlled Component </h1>
            <form action="" method="get">
                <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter your name" />
                <br /><br />
                  <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter your Eamil" />
                <br /><br />
                  <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Enter your Password" />
                <br /><br />
                <button>submit</button>
            
                <button onClick={()=>{setName("");setEmail("");setPassword("")}}>Clear</button>

                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
            </form>
        </div>
    )
}       

export default Component;