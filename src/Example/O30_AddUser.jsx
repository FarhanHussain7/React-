import { useState } from "react";

function Adduser({setuser}){
    // const [user,setuser]=useState('');
    return(
        <div>
            <h1>Add user</h1>
            
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="add user" />
            <hr />
        </div>
    )
}

export default Adduser;