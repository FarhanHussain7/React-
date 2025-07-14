import { useState } from "react";
import Counter from "./Example/Counter";
function State(){
    const [fruit, setFruit] = useState("Apple");

    const ChangeFruit = ()=>{
        if(fruit=="Apple"){
        setFruit("Banana")
        }else{
            setFruit("Apple")
        } 
    }
    return(
        <div>
        <h1>This is State </h1>
        <h2>{fruit}</h2>
        <button onClick={ChangeFruit}>Change the Fruit</button>
        <Counter/>
        </div>
    )
}

export default State;