// When data is very huge then we will useing context API easily send data to other component.
// It has three main part : 
//            1 - createContext : TO iniate Context API.
//            2 - Provider : use for update or provide data.
//            3 - useContext : get data from context api.

import { useState } from "react";
import CollageContext from "./Example/o37_College";
import { SubjectContext } from "./Example/O37_SubjectContext";

function CreateContext(){
    const [subject, setSubject]=useState('');
    return(
        <div style={{backgroundColor:"yellow", padding:"20px", borderRadius:"30px", boxShadow: "0px 3px 8px yellow"}}>
            <SubjectContext.Provider value={subject}>

                <select defaultValue={subject} onChange={(event)=>setSubject(event.target.value)}>
                    <option value="">Select Subject</option>
                    <option value="Maths">Maths</option>
                    <option value="History">History</option>
                    <option value="English">English</option>
                </select>
            <h1>Context API </h1>

            <button onClick={()=>setSubject('')}>Clear subject </button>
            <CollageContext/>
            </SubjectContext.Provider>
        </div>
    )
}

export default CreateContext;