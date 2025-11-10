// it we help to handle form very eaisly and effectively

// Only work in new versions not for old version of react
//  it give answer in boolean that your form is submited or not 
import { useActionState } from 'react';
import {useFormStatus} from 'react-dom'
function UseActionState(){

    // This is the handler function that will be called when the form is submitted.
    // It receives the previous state and the submitted form data.
    const handleData = async (previousdata, formdata) => {
        // Extract 'name' and 'password' fields from the submitted form data
        let name = formdata.get('name');
        let password = formdata.get('password');

        // Simulate a delay of 2 seconds (e.g., mimicking a network request)
        await new Promise((reso) => setTimeout(reso, 2000));

        // If both name and password are provided, return a success message with the data
        if (name && password) {
            return { message: 'Data Submitted', name, password };
        } else {
            // Otherwise, return an error message
            return { error: 'Failed to submit data. Try again in proper way' };
        }
    };

    // useActionState is a React hook (likely from a framework like Remix or a custom hook)
    // It handles form submission and tracks:
    // - `data`: the result returned from handleData (success or error)
    // - `action`: a function to trigger the form submission
    // - `pending`: a boolean indicating if the submission is still in progress
    const [data, action, pending] = useActionState(handleData, undefined);
        return(
            <div>
                <h1>UseActionState Program</h1>
                <form action={action}>
                <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
                <br />
                <br />
                <input type="password" placeholder="enter password" name="password" />
                <br />
                <br />
                <button disabled={pending} >Submit</button>
                </form>
<br />

            {
                data?.error && <span style={{color:'red'}}>{data.error}</span>
            }
            {
                data?.message && <span style={{color:'green'}}>{data.message}</span>
            }

            <h3>Name : {data?.name}</h3>
            <h3>Password : {data?.password}</h3>
            </div>
        )
    }

export default UseActionState;