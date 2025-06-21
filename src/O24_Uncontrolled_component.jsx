//unctrolled component :  there is no role of state here input are controlled with DOM 

// Controlled component means that we have input field in our file and this input field are controlled by the state

import { useState , useRef} from "react";

function UnCtrlComponent(){

    const handleEvent=(event)=>{
        event.preventDefault();
        const user = document.querySelector("#name").value;
        const email= document.querySelector("#email").value; 
        const password = document.querySelector("#password").value;

        console.log(user, email, password);
    }
   

    const nameRef=useRef(null);
    const emailref=useRef(null);
    const PasswordRef=useRef(null);

        const handleEventRef=(event)=>{
            event.preventDefault();
            const user1 = nameRef.current.value;
            const email1 = emailref.current.value;
            const password1 = PasswordRef.current.value;

            console.log("Handler Event Ref ", user1, email1, password1);
        }

    return(
        <div>
            <h1>UnControlled Component </h1>
            <form action="" method="post" onSubmit={handleEvent}>
                <input type="text" id="name"  placeholder="Enter your name" />
                <br /><br />
                  <input type="text" id="email"  placeholder="Enter your Eamil" />
                <br /><br />
                  <input type="password" id="password"  placeholder="Enter your Password" />
                <br /><br />
                <button>submit</button>
            </form>
            <hr />
             <h1>UnControlled Component with Ref </h1>
            <form action="" method="post" onSubmit={handleEventRef}>
                <input type="text" ref={nameRef} id="nameRef"  placeholder="Enter your name" />
                <br /><br />
                  <input type="text" ref={emailref} id="emailRef"  placeholder="Enter your Eamil" />
                <br /><br />
                  <input type="password" ref={PasswordRef} id="passwordRef"  placeholder="Enter your Password" />
                <br /><br />
                <button>submit with ref</button>
            </form>
           

        </div>
    )
}       

export default UnCtrlComponent;