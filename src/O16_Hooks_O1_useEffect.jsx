// hooks can not be used in class component
// useState , useEffect, useContext, useRef , useReducer
//  it is used state, life cycle, data handle in functional component
// - Hooks: Functions that let you use state and lifecycle features in functional components.
// - useState: Manages local component state.
// - useEffect: Handles side effects like data fetching or subscriptions.
// - useContext: Shares global data across components without prop drilling.
// - useRef: Accesses and persists mutable values without re-rendering.
// - useReducer: Manages complex state logic with a reducer function.
// - Functional Components: React components defined as functions, enhanced by hooks for state and lifecycle.
// - Class Components: Older React components using this.state and lifecycle methods—hooks can't be used here.
// - Side Effects: External operations (e.g., API calls, timers) managed by useEffect


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