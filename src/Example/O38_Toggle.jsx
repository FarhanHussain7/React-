import { useState } from "react";

// ✅ Custom hook to manage toggleable state (typically boolean)
const useToggle = (defaultValue) => {
    // ✅ Initialize state with the given default value
    const [value, setvalue] = useState(defaultValue);

    // ✅ Function to toggle the value or set a new one
    function toogleview(val) {
        // ❌ This condition is logically reversed — it should check if value *is* boolean
        // ✅ Correct logic: if (typeof value === 'boolean') { setvalue(!value); }
        if (typeof value != 'boolean') {
            // ✅ If value is not boolean, toggle it using !value
            setvalue(!value);
        } else {
            // ✅ If value is boolean, set it directly to the passed-in value
            setvalue(val);
        }
    }

    // ✅ Return the current value and the toggle function as a tuple
    return [value, toogleview];
};

export default useToggle;