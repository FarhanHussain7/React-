import { useState } from "react";

function CheckBox(){
  const [skills, setSkills]=useState([])

  const HandleCheckBox = (event)=>{
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
      setSkills([...skills,event.target.value])
    }else{
      setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }
    return(
        <div>
            <h1>Handle CheckBox</h1>
            <form action="" method="get">
                <input type="checkbox" value="Java" onChange={HandleCheckBox}/>
                <label htmlFor="java">java</label>
                <br /><br />
                  <input type="checkbox" value="php" onChange={HandleCheckBox} />
                  <label htmlFor="php">Php</label>
                <br /><br />
                  <input type="checkbox" value="python" onChange={HandleCheckBox} />
                  <label htmlFor="pyhton">Python</label>    
                <br /><br />
                <h1>{skills.toString()}</h1>
            </form>
        </div>
    )
}       

export default CheckBox;