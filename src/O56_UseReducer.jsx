// It is a better alternate of useState hook
// It is a new hook introduced in React 18.2.0 and later versions.  
// It is expensive hook so it is not recommended to use it in every component.

import { values } from "lodash";
import { useReducer } from "react";

    const emptyData = {
        name: "",
        password: "",
        email: "",
        city: "",
        address: "",
        phone: ""
    };

const reducer = (Data, action) => {
    return { ...Data , [action.type]: action.val };
}

function Reducer(){


    const [state, dispatch] = useReducer(reducer, emptyData);
    return(
        <div>
            <h1>Reducer Example</h1>

            <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'name'})} placeholder="Enter name" />
            <br /><br />

            <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'password'})} placeholder="Enter password" />
            <br /><br />

            <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'email'})} placeholder="Enter email" />
            <br /><br />

            <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'city'})} placeholder="Enter city" />
            <br /><br />

            <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'address'})} placeholder="Enter address" />
            <br /><br />

            <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'phone'})} placeholder="Enter phone no" />
            <br /><br />


            <ul>
                <li>
                    <strong>Name:</strong> {state.name}
                </li>
                <li>
                    <strong>Password:</strong> {state.password}
                </li>
                <li>
                    <strong>Email:</strong> {state.email}
                </li>
                <li>
                    <strong>City:</strong> {state.city}
                </li>
                <li>
                    <strong>Address:</strong> {state.address}
                </li>
                <li>
                    <strong>Phone:</strong> {state.phone}
                </li>
                <li>
                    <button onClick={() => console.log("Submitted", state)}>Submit</button>
                </li>
            </ul>
        </div>
    )
}

export default Reducer;