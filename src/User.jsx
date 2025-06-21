// function User({name , age , email}){
//    This file is used for Props 
function User({user}){
return(
        <div>
            {/* <h1> Name : {name}</h1>
            <h2>Age : {age}</h2>
            <h3>Email : {email}</h3> */}

                <h1>User in Object</h1>
                <hr/>
             <h1> Name : {user.name}</h1>
            <h2>Age : {user.age}</h2>
            <h3>Email : {user.email}</h3>
        </div>
    )
}

export default User;


export function College({college}){
    return(
        <div>
            <h1>College In Array</h1>
           
            <h1>{college}</h1>
        </div>
    )
}


export function Wrapper({children}){
    return(
        <div style={{color:"green", width:"300px", border:"3px solid yellow"}}>
            {children}
        </div>
    )
}

