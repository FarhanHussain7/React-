// when one child inherit the second child then the parent fetch data from one child and send to second child so the parent is act as lifting up state

import Adduser from "./Example/O30_AddUser";
import Displayuser from "./Example/O30_Displayuser";
import { useState } from "react";
function LifitingUp(){
    const [user,setuser]=useState('');
    return(
        <div>
            <Adduser setuser={setuser}/>
            <Displayuser user={user}/>
        </div>
    )
}
export default LifitingUp;