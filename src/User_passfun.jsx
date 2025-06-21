function UserFun({displayName, name}){
    return(
        <div>
            <button onClick={()=>displayName(name)}>Display name</button>
        </div>
    )
}
export default UserFun;