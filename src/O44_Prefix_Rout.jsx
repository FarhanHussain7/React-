
import { Link, Route, Routes } from 'react-router';
import About from '../../shoping/src/about';
import NavBar from './Example/O40_NavBar';
import Page404 from './Example/O41_PageNotFound';
import Collage from './Collage';
import CollageDetails from './Example/O42_Collage';
import Student from './Example/O37_Student';
import StudentDetails from './Example/O42_Student';
import Depart from './Example/O42_Department';
import Staff from './Example/O42_Staff';
import CourseDetails from './Example/O42_CourseDetails';

function Prefix(){
    return(
        <>
        {/* <NavBar/> */}

        <Routes>
            <Route element={<NavBar/>}>
                    <Route path='/' element={ <h>Home Page</h> }/>
            <Route path='/about' element={ <About/> }/>
            


{/* Prefix Route for user admin */}
            <Route path='user'>
            <Route path='/user/login' element={ <h>Contact Page</h> }/>
            </Route>

            <Route path='in'>
            <Route path='/in/help' element={ <h>Help Page</h> }/>
            </Route>

            </Route>
            <Route path='/collage' element={<CollageDetails/>}>
            
            <Route  index element={<StudentDetails/>}/>
            <Route path='department' element={<Depart/>}/>
            <Route path='staff' element={<Staff/>}/>
            <Route path='course' element={<CourseDetails/>}/>
            </Route>
{/* Add this route in the last if any user put any wrong route then it will show this */}
            <Route path='/*' element={<Page404/>}/>

        </Routes>



        </>
    )
}

export default Prefix;