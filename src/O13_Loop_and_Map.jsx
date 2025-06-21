import User from "./User";

function HandleData(){

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
        },
        {
            name:"kaif ",
            email:"kaif@gmail.com",
            age:20,
            id:4
        },
        {
            name:"kaif ",
            email:"kaif@gmail.com",
            age:20,
            id:4
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
            <h1>Handle data By Loop and Map</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                        </tr>
                </thead>
                <tbody>
                    { 
                    Userdata.map((User)=>(
                    <tr key={User.id}>
                        <td>{User.id}</td>
                        <td>{User.name}</td>
                        <td>{User.email}</td>
                        <td>{User.age}</td>
                        </tr>
                    )) 
                   }
                </tbody>
            </table>

            <h2>Dummy Data </h2>
            <table border={2}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                        </tr>
                </thead>
                <tr>
                        <td>1</td>
                        <td>Farhan Hussain</td>
                        <td>farhan@gmail.com</td>
                        <td>22</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>vikash</td>
                        <td>vikash@gmail.com</td>
                        <td>23</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Rohit</td>
                        <td>rohit@gmail.com</td>
                        <td>25</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>kaif</td>
                        <td>kaif@gmail.com</td>
                        <td>20</td>
                        </tr>
            </table>
        </div>
    )
}

export default HandleData;