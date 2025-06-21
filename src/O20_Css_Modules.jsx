// external css work in all parent and child component that why it will create some problem 
// Css moduel will not used globely 

import { useState } from 'react';
import style from './css/Css_profile.module.css';
import CssMod from './CssModule';
function CssModule(){
    const [showUser, setUser]=useState(false);
    return(
        <div>
            <h1 className={style.heading}>Css Module For external css</h1>
            <button onClick={()=>setUser(!showUser)}>Show User</button>
            { 
            showUser?<div style={{display:"flex", flexWrap:"wrap"}}>
            <CssMod/>
            <CssMod/>
            <CssMod/>
            <CssMod/>
            <CssMod/>
            <CssMod/>
            <CssMod/>
            <CssMod/>
            </div>:<p>No User found</p> 
            }
        </div>
    )
}

export default CssModule;