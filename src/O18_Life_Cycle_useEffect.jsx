import { useEffect } from "react";
import HandleData from "./O13_Loop_and_Map";
import { use } from "react";

const LifeCyle=({count , data})=>{

    useEffect(()=>{
        console.log("Mounting is like born ");
    },[])
    
    useEffect(()=>{
        console.log("Updating is second stage ");
    },[count])
return(
    <div>
         <h1>Handle Props with the help of hooks {count} : Data : {data}</h1>
    </div>
)
}

export default LifeCyle;