// It will show api result early and fast and api working as its speed in backend 

import { useEffect, useOptimistic, useState } from "react";

function USEOptimistic(){

    const [skills, setSkills]= useState([]);
    const [name, setName] = useState([]);
    //  Optimistic state 
    const [optskills, setOptskills] = useOptimistic(skills);

    useEffect(() =>{
        getSkills();
    },[]);

    const getSkills = async () =>{
        let res = await fetch('http://localhost:3000/skills');
        res = await res.json();
        setSkills(res);
    }

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve,ms))
    }

    const addskills = async (event) =>{

        const id= Math.random()*10000

        // Optimistic setting data 
        setOptskills((prev)=>[...prev, {name, id}])

        let response = await fetch('http://localhost:3000/skills', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, id})
        });
        await sleep(3000)
        response = await response.json();
        
        if(response){
            getSkills()
        }
    }
    return(
        <div className="ml-10 block mt-10">
            <form action={addskills}>
        <input 
        type="text"
        className="border border-blue-500 rounded rounded-2*1 text-center "
        placeholder="add your skills"
        onChange={(e)=>setName(e.target.value)
        
        } />
        <button
        className="bg-green-500 rounded rounded-2*1 w-20">add</button>
    </form>
        {
            // skills.map((item, index) =>(
                optskills.map((item, index) =>(
                <div key={index}>
                    {item.name}
                </div>
            ))
        }
        </div>
    )
}

export default USEOptimistic;