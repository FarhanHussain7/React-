import UserFun from "./User_passfun";

function PassFun(){

    const displayName=(name)=>{
        alert(name)
    }
    return(
        <div>
            <h1>Pass function from child to parent function</h1>
            <UserFun displayName={displayName} name="farhan"/>
            <UserFun displayName={displayName} name="kaif"/>
            <UserFun displayName={displayName} name="rohit"/>
            <UserFun displayName={displayName} name="sam"/>
        </div>
    ) 
}

export default PassFun;