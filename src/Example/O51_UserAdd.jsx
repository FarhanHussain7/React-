import { useState } from "react";

function Useradd(){

    const [username, setUsername]=useState("");
    const [age, setAge]=useState("");       
    const [email, setEmail]=useState("");


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form reload
    
        console.log("Username:", username);
        console.log("Age:", age);       
        console.log("Email:", email);

        const url = "http://localhost:3000/users";
        let response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,age,email})
        });
        response = await response.json();
        if(response){
            alert("User Added Successfully");
        }
    };

    return(
        <div style={{textAlign:"center",}}>
            <h1>Add user</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)}/> 
                <br/> <br/>
                <input type="text" name="" id=""  placeholder="Enter your Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <br/>   <br/>
                <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/> <br/>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default Useradd;