
import { Link, Route, Routes } from 'react-router';
import About from '../../shoping/src/about';
import NavBar from './Example/O40_NavBar';
import Page404 from './Example/O41_PageNotFound';

function PageNotFound(){
    return(
        <>
        <NavBar/>

        <Routes>
            <Route path='/' element={ <h>Home Page</h> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/help' element={ <h>Help Page</h> }/>
            <Route path='/login' element={ <h>Contact Page</h> }/>
{/* Add this route in the last if any user put any wrong route then it will show this */}
            <Route path='/*' element={<Page404/>}/>

        </Routes>



        </>
    )
}

export default PageNotFound;