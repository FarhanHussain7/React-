// state that is calculated or derived from other state values or props within your component 
// Derived state can be a veraible
// no need to extra state only variables or constants are enough

import { set } from "mongoose";
import { useState } from "react";

function Updating(){
    const [Data, setData]=useState({
        name:"farhan hussain",
        address:{
            city:'Ghaziabad',
            country:'india'
        },
        phoneno:'978777867'
    });

    const handelAddUser=(val)=>{
        Data.name=val;
        setData({...Data})
    }

    const Updatecity=(city)=>{
        Data.address.city=city
        setData({...Data,address:{...Data.address,city}})
    }

    return(
        <div>
            <h1>Derived State </h1>
            <input type="text" onChange={(event)=>handelAddUser(event.target.value)} placeholder="Update user" />
            <input type="text" onChange={(event)=>Updatecity(event.target.value)} placeholder="Update city" />
            <h1>Name : {Data.name}</h1>
            <h1>Address : {Data.address.city} </h1>
            <h1>country : {Data.address.country} </h1>
            <h1>Phone no : {Data.phoneno}</h1>
            
        </div>
    )
}


export default Updating;