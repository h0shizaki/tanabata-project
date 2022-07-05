import { Link } from "react-router-dom";
import './Navbar.css' ;
function Nav() {

    return (

        //style="background-color: white; padding: 0.5rem;"
        <ul className="nav" style={{"backgroundColor":"white"}}>
            <li className="nav-item">
                <h2>
                <Link to={"/"} className="nav-link  nav-header" >たなばた</Link>
                </h2>
            </li>

            <li className="nav-item ">
                <Link to={"/aboutus"} className="nav-link">About</Link>
            </li>

        </ul>
    )


}
export default Nav;