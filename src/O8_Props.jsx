import { useState } from "react";
import User, { College, Wrapper } from "./User";

function Props(){

    let Username = "Farhan Hussain";
    let age = 24;
    let email = "farhanhussain@gmail.com";

    let ObjectUser = {
        name:"kaif Hussain",
        age : 22,
        email:"farhanhussain@gmail.com"
    }

    let ObjectUser2 = {
        name:"kaif Hussain",
        age : 22,
        email:"farhanhussain@gmail.com"
    }

    let Collegename = ["IET","DU","IIT","HI_TECH"];

    const [student, setState]=useState();

    return(
        <div>
            <h1>This is Props </h1>
            {/* <User name="Farhan hussain" age={24} email={"farhanhussain@gmail.com"} /> */}

            {/* <User name={Username} age={age} email={email} /> */}

           <h1> {student} </h1><br />

            <button onClick={()=>{setState("Farhan Hussain")}}>Click to update Name</button>

            <User user={ObjectUser}/>
            <User user={ObjectUser2}/>

            <College college={Collegename[0]}/>
            <College college={Collegename[1]}/>

            <Wrapper>
                <h1>Hello Farhan Hussain </h1> 
            </Wrapper>

            <Wrapper>
                
                <h1 style={{color:"red"}}>Email Address</h1>
             </Wrapper>
        </div>
    )
}

export default Props;