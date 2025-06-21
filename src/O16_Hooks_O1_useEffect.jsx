// hooks can not be used in class component
// useState , useEffect, useContext, useRef , useReducer
//  it is used state, life cycle, data handle in functional component

import { useEffect, useState } from "react";
import HandleProp from "./O17_Handle_Props_with_hooks";
import LifeCyle from "./O18_Life_Cycle_useEffect";

//  useEffect control side-effect inside component
function Effect(){
    const [counter, setCounter] = useState(0);
    const [data, setdata]= useState(0);
    const [display, setDisplay]=useState(true);

    useEffect(()=>{
    // CallOnce();
    CounterFunction();

    },[counter])

    function CallOnce(){
        console.log("Callonce Function called ");
    }

    function CounterFunction(){
        console.log("counter Value", counter);
    }

    return(
        <div>
            <h1>UseEffect Of Hooks</h1>
            <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
            <button onClick={()=>setdata(data+2)}>Data {data}</button>
            <HandleProp count={counter} data={data}/>
            <button onClick={()=>setDisplay(!display)}>Life Cycle update </button>
            {
            display? <h1><LifeCyle count={counter} data={data}/></h1>:null
            }
            </div>
    )
}

export default Effect;