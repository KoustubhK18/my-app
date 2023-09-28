import "./NavBar.css"
import logo from "../assets/images/Airbnb_Logo_Bélo.svg.png"

export default function NavBar(){
    return(
        <nav className="nav-bar site-logo">
            <img src={logo} alt="airbnb logo" />
        </nav>
    );
}