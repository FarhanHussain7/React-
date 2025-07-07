//  It only work in latest React version 
// In this hook you don't need to use useState, useEffect, useReducer, etc.
// It is a new hook introduced in React 18.2.0 and later versions.

import { use, useActionState, useState } from "react";


function ValidateUser(){

    const handleLogin = (prevData, formData)=>{
        let name = formData.get('name');
        let password = formData.get('password');


        if(!name || name.length < 5){
            return { error: "Name must be present and  at least 5 characters long" };
        }   else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            return { error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number" };

        }else{
            return { message: "Login successful" };
        }   
    }

    const [data, action, pending]= useActionState(handleLogin);


    return(
        <div>
            <h1>Validation Page</h1>
            {
                data?.message && <span> {data?.message}</span>           
         }
         {
            data?.error && <span className="error"> {data?.error}</span>    
         }
            <form action={action }>
                <input type="text" name="name" placeholder="Enter your name" />
                <br/> <br/>
                <input type="password" name="password" placeholder="Enter your password" />
                <br/> <br/>
                <button>login</button>
            </form>
        </div>
    )
};

export default ValidateUser;