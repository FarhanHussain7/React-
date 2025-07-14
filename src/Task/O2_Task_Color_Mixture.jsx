import React, { useState } from 'react';
function ColorMix(){

    const color =JSON.parse(localStorage.getItem('color'))
    const [red, setRed] = useState(color?.red || 0);
    const [green, setGreen] = useState(color?.green || 0);
    const [blue, setBlue] = useState(color?.blue || 0);


    const save = () => {
        // Save the current color combination to localStorage
        localStorage.setItem('color', JSON.stringify({red, green, blue}));
        alert('Color combination saved!');
    };
    return(
        <div>
            <h1>Color Mixer</h1>
        <div style={{width:"200px", height:"200px", backgroundColor:'rgb('+red+','+green+','+blue+')', borderRadius:"10px", boxShadow: "0px 3px 8px red"}}>
        {/* <div style={{width:"200px", height:"200px", backgroundColor:`rgb(${red}, ${green}, ${blue})`, borderRadius:"10px", boxShadow: "0px 3px 8px red"}}> */}

        </div>
        <br /><br />
            <label htmlFor="">Red </label>
            <input type="range" value={red} onChange={(e)=>setRed(e.target.value)}  min={0} max={255} />
            <br /><br />
            <label htmlFor="">Green </label>
            <input type="range" value={green} onChange={(e)=>setGreen(e.target.value)}  min={0} max={255} />
            <br /><br />
            <label htmlFor="">Blue </label>
            <input type="range" value={blue} onChange={(e)=>setBlue(e.target.value)}  min={0} max={255} />
            <br /><br />

            <button onClick={() => { setRed(0); setGreen(0); setBlue(0); localStorage.setItem('color', JSON.stringify({red:0, green:0, blue:0})); }} style={{padding:"10px", borderRadius:"5px", backgroundColor:"red", color:"white"}}>Reset</button>
            <br /><br />
            <button onClick={save} style={{padding:"10px", borderRadius:"5px", backgroundColor:"#2563EB", color:"white"}}>Save Color Combination</button>
        </div>
    )
}

export default ColorMix;