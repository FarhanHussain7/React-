// Only work in new versions not for old version of react
//  it give answer in boolean that your form is submited or not 
import {useFormStatus} from 'react-dom'
function FormStatus(){

    const HandleSubmit=async ()=>{
        await new Promise(res=>setTimeout(res, 2000));
        console.log("submit");
    }

    function Componentuser(){

        const {pending}=useFormStatus();
        console.log(pending);

        return(
            <div>
                
                <input type="text" placeholder="enter name" id="" />
                <br />
                <br />
                <input type="text" placeholder="enter password" id="" />
                <br />
                <br />
                <button disabled={pending}>{pending?'Submitting':'Submit'}</button>

            </div>
        )
    }

    return(
        <div>
            <h1>UseformStatus hooks </h1>
             <form action={HandleSubmit}>
                <Componentuser/>
             </form>
            
        </div>
    )
}

export default FormStatus;