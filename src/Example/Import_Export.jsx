
function UserComponent(){
    return(
        <div>
            <h1>Export default can only use single time </h1>
        </div>
    )
}
export default UserComponent;

export function UserKey(){
    return(
        <h2>now we use this component in {} </h2>
    )
}