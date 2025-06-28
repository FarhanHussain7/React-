//  They are only used for navbar it will high light the active class


import { Link, NavLink, Route, Routes } from 'react-router';
import About from '../../shoping/src/about';
import NavBar from './Example/O40_NavBar';
import Page404 from './Example/O41_PageNotFound';
import CollageDetails from './Example/O42_Collage';
import StudentDetails from './Example/O42_Student';
import Depart from './Example/O42_Department';
import Staff from './Example/O42_Staff';
import CourseDetails from './Example/O42_CourseDetails';
import UserList from './Example/O45_User_list';
import UserDetail from './Example/O45_User_Details';
import './Example/header.css';
function NavBarLinkProcess(){
    return(
        <div>
         <div className="header">
            <div>
                <Link className="link" to="/"><h3>Logo</h3></Link>
            </div>
        <div>
            <ul>
                <li>
        <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li>
        <NavLink className="link" to="/about">About</NavLink>
                </li>
                <li>
        <Link className="link" to="/user/login">Login</Link>
                </li>
                <li>
        <Link className="link" to="/in/help">Help</Link>
                </li>
                 <li>
        <Link className="link" to="/collage">Collage</Link>
                </li>
                 <li>
        <Link className="link" to="/userlist">User</Link>
                </li>
                <li>
        <Link className="link" to="/userlist">list</Link>
                </li>
            </ul>
        </div>
        </div>
       

       <Routes>
            <Route path='/' element={ <h>Home Page</h> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/help' element={ <h>Help Page</h> }/>
            <Route path='/login' element={ <h>Contact Page</h> }/>
            <Route path='/collage' element={<CollageDetails/>}>
            
            <Route path='student' element={<StudentDetails/>}/>
            <Route path='department' element={<Depart/>}/>
            <Route path='staff' element={<Staff/>}/>
            <Route path='course' element={<CourseDetails/>}/>
            </Route>
{/* Add this route in the last if any user put any wrong route then it will show this */}
            <Route path='/*' element={<Page404/>}/>

        </Routes>



        </div>
    )
}

export default NavBarLinkProcess;
