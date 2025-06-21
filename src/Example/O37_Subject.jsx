import { createContext } from "react"
import { SubjectContext } from "./O37_SubjectContext"

export default function Subject(){
    const Subject=createContext(SubjectContext);
    return(
        <div style={{backgroundColor:"orange", padding:"30px"}}>
            <h1>Subject : {Subject} </h1>
        </div>
    )
}