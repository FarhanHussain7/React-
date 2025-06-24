// Step 1 - Add dependency npm i react-router
// step 2 - import BrowserRouter in main and implement it.
// step 3 - Implement Routes , Route, Link  

import { Route, Routes, Link} from "react-router";
import Home from "../../shoping/src/home";
import About from "../../shoping/src/about";

function RouterReact(){
    return(
        <div>
            <Link to="/">Home page</Link><br />
            <Link to="/about">About</Link>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <h1>Router 7</h1>
        </div>
    )
}
export default RouterReact;