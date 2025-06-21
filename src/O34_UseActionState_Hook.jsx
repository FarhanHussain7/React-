// it we help to handle form very eaisly and effectively

// Only work in new versions not for old version of react
//  it give answer in boolean that your form is submited or not 
import { useActionState } from 'react';
import {useFormStatus} from 'react-dom'
function UseActionState(){

    const handleData= async(previousdata, formdata)=>{
        let name = formdata.get('name');
        let password = formdata.get('password');

        await new Promise((reso) => setTimeout(reso,2000))

        if (name && password){
            return {message:'Data Submitted', name, password}
        }else{
            return {error :'Faild to submit data Try again in proper way'}
        }
    }

   const [data,action,pending]=useActionState(handleData,undefined);
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