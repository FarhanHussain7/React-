import { Link, Outlet } from "react-router"
import './header.css'

function NavBar(){
    return(
        <div  >
        <div className="header">
            <div>
                <Link className="link" to="/"><h3>Logo</h3></Link>
            </div>
        <div>
            <ul>
                <li>
        <Link className="link" to="/">Home</Link>
                </li>
                <li>
        <Link className="link" to="/about">About</Link>
                </li>
                <li>
        <Link className="link" to="/login">Login</Link>
                </li>
                <li>
        <Link className="link" to="/help">Help</Link>
                </li>
                 <li>
        <Link className="link" to="/collage">Collage</Link>
                </li>
            </ul>
        </div>
        </div>
        <Outlet/>
        </div>
    )
}

export default NavBar;