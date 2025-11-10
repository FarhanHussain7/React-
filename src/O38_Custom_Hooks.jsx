// 

import useToggle from "./Example/O38_Toggle"

function Customhook(){

    const [value, toogleview]=useToggle(true);
    return(
        <div>
            <h1>Custom Hooks</h1>
            <button onClick={toogleview}>Toggle Heading</button>
            <button onClick={()=>toogleview(false)}>Hide button</button>
            <button onClick={()=>toogleview(true)}>Show button</button>

            {
                value?<h1>custom hooks in React js</h1>: null
            }
        </div>
    )
}

export default Customhook;