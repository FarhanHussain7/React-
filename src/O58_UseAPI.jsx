// UseAPI is a placeholder component that can be used to demonstrate how to use an API in a React application.
// It can be replaced with actual API calls and data fetching logic as needed.

import React, { useState, useEffect } from 'react'; 

function UseAPI(){
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from an API
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching API:', error));
    }, []);

    return(
        <div>
            <h1>Use API</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )
            }
            {/* {
                data.map((item)=>(
                    <div key={item.id} style={{border:"1px solid black", margin:"10px", padding:"10px", borderRadius:"5px"}}>
                        <h2>{item.name}</h2>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Address: {item.address}</p>
                    </div>                                          
                ))
            } */}
        </div >
    )
}

export default UseAPI;  