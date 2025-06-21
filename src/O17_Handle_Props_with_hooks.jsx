import { useEffect } from "react";
import HandleData from "./O13_Loop_and_Map";

const HandleProp=({count , data})=>{

    const HandleCounter=()=>{
        console.log("Handler  ")
    }

    const handleData=()=>{
        console.log("Handle data");
    }
    useEffect(()=>{
    HandleCounter();
    },[])

    
    useEffect(()=>{
    HandleData();
    },[data])
return(
    <div>
         <h1>Handle Props with the help of hooks {count} : Data : {data}</h1>
    </div>
)
}

export default HandleProp;