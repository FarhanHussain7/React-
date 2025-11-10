// When data is very huge then we will useing context API easily send data to other component. 
 // It has three main part : 
//            1 - createContext : TO iniate Context API. 
//            2 - Provider : use for update or provide data. 
//            3 - useContext : get data from context api.


// ✅ React hook for managing local state
import { useState } from "react";

// ✅ Importing a child component that will consume context
import CollageContext from "./Example/o37_College";

// ✅ Importing the context object created using createContext
import { SubjectContext } from "./Example/O37_SubjectContext";

function CreateContext() {
    // ✅ Local state to hold the selected subject
    const [subject, setSubject] = useState('');

    return (
        // ✅ Styling the container with inline styles
        <div style={{
            backgroundColor: "yellow",
            padding: "20px",
            borderRadius: "30px",
            boxShadow: "0px 3px 8px yellow"
        }}>
            {/* ✅ Providing the current subject value to all child components via Context */}
            <SubjectContext.Provider value={subject}>

                {/* ✅ Dropdown to select a subject; updates state on change */}
                <select
                    defaultValue={subject}
                    onChange={(event) => setSubject(event.target.value)}
                >
                    <option value="">Select Subject</option>
                    <option value="Maths">Maths</option>
                    <option value="History">History</option>
                    <option value="English">English</option>
                </select>

                {/* ✅ Heading for visual context */}
                <h1>Context API</h1>

                {/* ✅ Button to clear the selected subject */}
                <button onClick={() => setSubject('')}>Clear subject</button>

                {/* ✅ Child component that will consume the subject value from context */}
                <CollageContext />

            </SubjectContext.Provider>
        </div>
    );
}

// ✅ Exporting the component so it can be used elsewhere
export default CreateContext;