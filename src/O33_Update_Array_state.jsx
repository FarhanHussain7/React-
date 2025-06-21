// - Changeing the value of array by the input field

import { useState } from "react";

function UpdateArray(){
    // const [name, setName]=useState('Farhan')

    const [Data,setData]=useState([
        'farhan','kaif','jihan'
    ])

    const HandleData=(name)=>{
        Data[Data.length-2]=name
        setData([...Data])
    }

 const [ObjData,setObjData]=useState([
        {name:'deepak', age:'29', address:'delhi'},
        {name:'shivam', age:'23', address:'noida'},
        {name:'Richa', age:'22', address:'Ghaziabad'}
    ])

    const HandleObjData=(age)=>{
        ObjData[ObjData.length-1].age=age;
        setObjData([...ObjData])
    }
    return(
        <div>
            <h1>Updating Array value</h1>
            <p>Name : {name}</p>
            {/* <button onClick={()=>setName("Farhan hussain")}>Change name</button> */}

            <input type="text" placeholder="Update Name" onChange={(event)=>HandleData(event.target.value)} />
            {
                Data.map((item, index)=>(
                    <h1 key={index}>{item}</h1>
                ))
            }
<hr />

             <input type="text" placeholder="Handle object age" onChange={(event)=>HandleObjData(event.target.value)} />

            {
                ObjData.map((items,index)=>(
                    <h3 key={index}> name : {items.name}, Age : {items.age}, Address : {items.address}</h3>
                ))
            }

        </div>
    )
}

export default UpdateArray;