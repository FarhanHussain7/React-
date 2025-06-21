// it will provide a unqiue id every time when ever we used it 

import { useId } from "react"

export default function UseID(){
    
    return(
        <div>
            {/* <h1>UseId Hook For Unique value</h1> */}
            {/* <h2>{name}</h2>
            <h2>{password}</h2>
            <h2>{age}</h2>
            <h2>{PhoneNo}</h2> */}

            <UserD/>
            <UserD/>
            <UserD/>
            
        </div>
    )

    
}

function UserD(){
            const name = useId();
            const password = useId();
             const age = useId();
            const PhoneNo = useId();
            const term = useId();

        return(
            <div>
                <form action="">
                <label htmlFor={name}>Enter your name</label>
                <input type="text" id={name} placeholder="Enter name"/>
                <br />
                <label htmlFor={password}>Enter your Password</label>
                <input type="text" id={password} placeholder="Enter password"/>
                <br />
                <label htmlFor={age}>Enter your name</label>
                <input type="text" id={age} placeholder="Enter age"/>
                <br />
                <label htmlFor={PhoneNo}>Enter your name</label>
                <input type="text" id={PhoneNo} placeholder="Enter Phone no"/>
                <br />
                <input type="checkbox" id={term} />
                <label htmlFor={term}>Term and Conditions</label>
                <br />
            </form>
            <hr />
            </div>
        )
    }