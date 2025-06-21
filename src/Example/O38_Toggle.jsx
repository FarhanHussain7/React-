import { useState } from "react";

const useToggle=(defaultValue)=>{
    const [value, setvalue]=useState(defaultValue);

    function toogleview(val){
        if(typeof value!='boolean'){
            setvalue(!value)
        }else{
            setvalue(val)
        }

    }
    return [value, toogleview];
}

export default useToggle;