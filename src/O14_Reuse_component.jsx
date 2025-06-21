import ReuseUser from "./ReuseUser";
import User from "./User";

function ReuseComp(){

    const Userdata = [
        {
            name:"farhan Hussain",
            email:"farhan@gmail.com",
            age:22,
            id:1
        },
        {
            name:"Vikash",
            email:"vikash@gmail.com",
            age:24,
            id:2
        },
        {
            name:"Rohit kumar",
            email:"rohit@gmail.com",
            age:25,
            id:3
        },
        {
            name:"kaif ",
            email:"kaif@gmail.com",
            age:20,
            id:4
        }
    ]
    return(
        <div>
            <h1>Reuse Component</h1>
                {
                    Userdata.map((user)=>(
                        <div key={user.id}>
                            <ReuseUser data={user}/>
                        </div>
                    ))
                }
        </div>
    )
}

export default ReuseComp;