import { Link, Route, Routes } from "react-router";
import Loader from "./O50_API_Loader";
import Useradd from "./Example/O51_UserAdd";

function RoutePagesAPI(){
    return(
        <div>
            <h1>Routes API Pages</h1>

            <Link to="/">UserList</Link>  <br />
            <Link to="/add">Add User</Link>
            <Routes>
        
                <Route path="/" element={<Loader/>} />
                <Route path="/add" element={<Useradd/>} />
            </Routes>
        </div>
    )
}

export default RoutePagesAPI;