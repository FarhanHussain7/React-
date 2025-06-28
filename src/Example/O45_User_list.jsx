import { Link } from "react-router";

function UserList(){

    const StudentList = [
        {id:1, name:"Farhan" },
        {id:2, name:"ryan" },
        {id:3, name:"Jeet" },
        {id:4, name:"Sam" },
        {id:5, name:"rohit" },
        {id:6, name:"deepak" }
]
    return(
        <div >
            <h1>User List Page</h1>
            {
                StudentList.map((item)=>(
                    <div>
                        <h1><Link to={'/userlist/'+item.id} >{item.name}</Link></h1>
                    </div>
                ))
            }

             <h1>User List Page with Name </h1>
            {
                StudentList.map((item)=>(
                    <div>
                        <h1><Link to={'/userlist/'+item.id+'/'+item.name} >{item.name}</Link></h1>
                    </div>
                ))
            }
        </div> 
    )
}

export default UserList;