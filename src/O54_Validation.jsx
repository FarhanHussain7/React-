import { use, useState } from "react";


function Validate(){

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState();

    const SetNameData = (e) => {
        console.log(e.target.value);
        if(e.target.value.length < 5){
            setNameError("Name must be at least 5 characters long");
        }else
        {
            setNameError('');
        }
    }



    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState();
const SetPasswordData = (e) => {

    const regex = /^[A-Z0-9]+$/i;
        if (regex.test(e.target.value)) {
             setPasswordError();
            
        } else {
         setPasswordError("Password must be at valid characters long");
        }
    }


    return(
        <div>
            <h1>Validation Page</h1>

            <input type="text" className={nameError ? "error" : ""} placeholder="Enter your name" onChange={SetNameData} />
            <span>{nameError && <>{nameError}</> }</span>
            <br/> <br/>
            <input type="text" className={passwordError ? "error" : ""} placeholder="Enter your password" onChange={SetPasswordData} />
            <span>{passwordError && <>{passwordError}</>  }</span>
            <br/> <br/>
            <button disabled={nameError || passwordError}>Submit</button>
        </div>

    )
};

export default Validate;