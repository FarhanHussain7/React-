import { Link, useParams } from "react-router";


function UserDetail(){

    const paramas = useParams();
    return(
        <div >
            <h1>User Detail Page</h1>

            <h2>User Id : {paramas.id}</h2>
            <h2>User Name : {paramas.name}</h2>

            <Link to='/userlist'>Back to user</Link>
            
        </div> 
    )
}

export default UserDetail;