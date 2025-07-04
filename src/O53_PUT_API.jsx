import { Link, Route, Routes } from "react-router";
import Loader from "./O50_API_Loader";
import Useradd from "./Example/O51_UserAdd";
import UserEdit from "./Example/O53_EditUser";

function UpdatePagesAPI(){
    return(
        <div>
            <h1>Delete API Pages</h1>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
            <Link to="/">UserList</Link>  <br />
            <Link to="/add">Add User</Link>
            </div>
            <Routes>
        
                <Route path="/" element={<Loader/>} />
                <Route path="/add" element={<Useradd/>} />
                <Route path="/edit/:id" element={<UserEdit/>} />

            </Routes>
        </div>
    )
}

export default UpdatePagesAPI;