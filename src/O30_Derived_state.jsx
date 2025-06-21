// state that is calculated or derived from other state values or props within your component 
// Derived state can be a veraible
// no need to extra state only variables or constants are enough

import { set } from "mongoose";
import { useState } from "react";

function Derived(){
    const [users, setUsers]=useState([]);
    const [user, setUser]=useState('');

    const handelAddUser=()=>{
        setUsers([...users,user]);
    }

    const total = users.length;
    const LastUser = users[users.length-1];
    const unique = [...new Set(users)].length
    return(
        <div>
            <h1>Derived State </h1>
            <h1>Total User : {total}</h1>
            <h1>last user : {LastUser} </h1>
            <h1>Total unique User : {unique}</h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user" />
            <button onClick={handelAddUser}>add user</button>
            {
                users.map((items, index)=>(
                    <h1 key={index}>{items}</h1>
                ))
            }
        </div>
    )
}


export default Derived;