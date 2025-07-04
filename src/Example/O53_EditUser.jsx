import { set } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"; // Import useParams to access URL parameters
import '../Example/header.css';
function UserEdit(){

    const [username, setUsername]=useState("");
    const [age, setAge]=useState("");       
    const [email, setEmail]=useState("");

    const {id}= useParams(); // Get the user ID from the URL parameters

const url = "http://localhost:3000/users/" + id;

    const navigate = useNavigate();


    useEffect(() => {
        // Fetch the user data when the component mounts    
        handleSubmit();
    }, []); // Run this effect when the component mounts or when the ID changes   

    const handleSubmit = async () => {
         // Construct the URL with the user ID
        // Make sure to replace with your actual API endpoint
        let response = await fetch(url);
        response = await response.json();
        
        setUsername(response.name);
        setAge(response.age);       
        setEmail(response.email);
    };

    const Updateuser = async () => {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                age: age,
                email: email
            }),
        });
        response = await response.json();
        console.log(response);
        if(response){
            alert("User Updated Successfully");
            navigate('/')    // Navigate back to the user list after updating
        }
        
    }
    return(
        <div style={{textAlign:"center",}}>
            <h1>Edit user</h1>
            <form onSubmit={Updateuser}>
                <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)}/> 
                <br/> <br/>
                <input type="text" placeholder="Enter your Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <br/>   <br/>
                <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/> <br/>
                <button type="submit"> Update </button>
            </form>
        </div>
    )
}

export default UserEdit;