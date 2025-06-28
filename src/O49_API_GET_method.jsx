// https://dummyjson.com/user

import { useEffect, useState } from "react";
import './Example/header.css';
function API(){

const [APIData, SetAPIData] = useState('');

    useEffect(()=>{
        GetAPI();
    },[])
    async function GetAPI(){
        const url = "https://dummyjson.com/user";
        let response = await fetch(url);
        response = await response.json();
        console.log(response.users)
        SetAPIData(response.users)
    } 
    return(
        <div>
        <h1>Fetch API From GET Method</h1>
         <ul className="user-list2">
                <li>First Name</li>
                <li>Last Name</li>
                <li>Age</li>
            </ul>


        {
            APIData && APIData.map((user, index)=>(
            // <h1 key={index}>{user.firstName}</h1>
            <ul className="user-list" key={index}>
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.age}</li>
            </ul>
            ))
        }
        </div>
    )
}

export default API;