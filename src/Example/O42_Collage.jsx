
import {Link, NavLink, Outlet } from "react-router";

function CollageDetails(){
    return(
        <div className="college" style={{textAlign:"center"}}>
            <h1>Collage Page</h1>
            <h2><Link to="/">Go to Home Page</Link></h2>
            <NavLink className="link" to="/collage">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="staff">Staff</NavLink>
            <NavLink className="link" to="course">Course</NavLink>
            <Outlet/>
        </div> 
    )
}

export default CollageDetails;