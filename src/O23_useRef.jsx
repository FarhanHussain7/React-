// it will used to control the input field 
import { useRef } from "react";
function UseRef(){
    const inputref= useRef(null);

    const Inputhandler=()=>{
        inputref.current.focus();
        inputref.current.style.color='red'
        inputref.current.placeholder="enter password"
        inputref.current.value="2234"
    }

    const Togglehandler=()=>{
        if(inputref.current.style.display!='none'){
        inputref.current.style.display='none'
        }else{
            inputref.current.style.display='inline'
        }
    }

    const headingRef = useRef(null)
    const h1handler=()=>{
        headingRef.current.style.color='green'
    }
    return(
        <div>
            <h1>UseRef Hook</h1>
            <button onClick={Togglehandler} style={{color:"blue", border:"3px solid black", width:"150px"}}>Toggle</button>
            <input ref={inputref} type="text" placeholder="Enter your name" />
            <button onClick={Inputhandler} style={{color:"green", border:"3px solid green", width:"150px"}}>focus on input field</button>

            <h1 ref={headingRef}>Code step by step </h1>
            <button onClick={h1handler}>Heading Handler</button>
        </div>
    )
}

export default UseRef;