import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router"; 
import './Example/header.css';
import { set } from "lodash";
function Loader() {
// To see the Loader You have to go to inscpect mode / network / make network to 3g
    const [loading,setloading] =useState(false);
    const [LoadData, setLoadData] = useState([]);
    const NavigateTo = useNavigate();
    // useEffect(()=>{
    //     APILoader();
    // },[])            
    useEffect(()=>{
        setloading(true);
        APILoader();
    },[]);


    const APILoader = async()=> {
     const url = 'http://localhost:3000/users'; // Replace with your API endpoint
     let response = await fetch(url);
     response = await response.json();
     console.log(response);
     setLoadData(response); 
    setloading(false);
    }


    const deleteuser = async(id)=>{
        const url = `http://localhost:3000/users/${id}`; // Replace with your API endpoint
        let response = await fetch(url, {
            method: 'DELETE',
        });
        response = await response.json();
        console.log(response);
        if(response){
            alert("User Deleted Successfully");
            APILoader(); // Reload the data after deletion
        }
    }

    const edituser = (id)=>{
        // Navigate to the edit page with the user ID
        NavigateTo(`/edit/${id}`);
    }

  return (
    <div className="loader">
        <h1>API Loader Example</h1>
        {/* <pre>{JSON.stringify(LoadData, null, 2)}</pre>      
        <button onClick={APILoader}>Load Data</button> */}
        {/* <button onClick={APILoader}>Load Data</button> */}
        {/* <h1>{LoadData}</h1> */} 


        {
            !loading ?
            LoadData.map((item, index)=>(
                <div key={index}>
                    {/* <h1>{item.name}</h1>
                    <p>{item.age}</p>
                    <p>{item.email}</p> */}

                    
                <ul className="user-list" key={index}>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.email}</li>
                <li><button onClick={()=>deleteuser(item.id)}>Delete</button>
                    <button onClick={()=>edituser(item.id)}>Edit</button>
                </li>
            </ul>
                </div>

            ))
            :<h1>Loading...</h1>
        }
    </div>
  );
}

export default Loader;  