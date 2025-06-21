import { set } from "mongoose";
import { useState } from "react";

function Radio(){
        const [gender, setGender]=useState("female");
        const [city, setCity]=useState("delhi");

    return(
        <div>
            <h1>Handle radio Button</h1>
            <h2>Select gender</h2>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" value={"male"} checked={gender=="male"} />
            <label htmlFor="male">male</label> 
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="femal"  value={"female"} checked={gender=="female"}/>
            <label htmlFor="female">female</label>

            <h1> Selected Gender :{gender}</h1>
                <br /><br />

                <h1>Select city</h1>
                <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
                    <option value="noida">noida</option>
                    <option value="delhi">delhi</option>
                    <option value="gurugram">grugram</option>
                </select>

                <h1>Selected city: {city}</h1>
        </div>
    )
}
export default Radio;