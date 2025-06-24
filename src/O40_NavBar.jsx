//  BrowserRouter - This component enables client-side routing using the browser history API .
//  Routes  - It's responsible for rendring the appropriate component based on the current URL.
//  Route - Each Routes component defines a path and the corresponding component to render when that path is matched.
//  Link - A Link for navigation from 1 page to other page

import { Link, Route, Routes } from 'react-router';
import About from '../../shoping/src/about';
import NavBar from './Example/O40_NavBar';

function BrowserRou(){
    return(
        <>
        <NavBar/>

        <Routes>
            <Route path='/' element={ <h>Home Page</h> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/help' element={ <h>Help Page</h> }/>
            <Route path='/login' element={ <h>Contact Page</h> }/>
        </Routes>



        </>
    )
}

export default BrowserRou;