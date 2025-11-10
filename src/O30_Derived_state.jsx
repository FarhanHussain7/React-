// state that is calculated or derived from other state values or props within your component 
// Derived state can be a veraible
// no need to extra state only variables or constants are enough

import { set } from "mongoose";
import { useState } from "react";

function Derived() {
    // State to hold the list of users
    const [users, setUsers] = useState([]);

    // State to hold the current input value for a single user
    const [user, setUser] = useState('');

    // Function to add the current user to the users list
    const handelAddUser = () => {
        // Spread the existing users and add the new user to the array
        setUsers([...users, user]);
    };

    // Total number of users added
    const total = users.length;

    // The last user added to the list (undefined if list is empty)
    const LastUser = users[users.length - 1];

    // Number of unique users (removes duplicates using Set)
    const unique = [...new Set(users)].length;

    return(
        <div>
            <h1>Derived State </h1>
            <h1>Total User : {total}</h1>
            <h1>last user : {LastUser} </h1>
            <h1>Total unique User : {unique}</h1>
            <input type="text"
             onChange={(event)=>setUser(event.target.value)} 
             style={{border:"2px solid black", margin:"10px"}} 
             placeholder="add new user"
             />
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