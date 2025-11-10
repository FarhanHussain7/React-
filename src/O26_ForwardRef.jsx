// when referance is send or forword to parent to child component 

import { useRef } from "react";
import UserForward from "./Userforward";

function ForwordRef(){

    const inputref=useRef(null);

    const Refclick=()=>{
        inputref.current.value=123;
        inputref.current.style.backgroundColor='lightblue';
        inputref.current.style.color='red';
    }
    return(
        <div>
            <h1>Forward Ref is </h1>
            <UserForward ref={inputref}/>
            <button onClick={Refclick}>Ref click</button>
        </div>
    )
}
export default ForwordRef;