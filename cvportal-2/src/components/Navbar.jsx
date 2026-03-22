import { NavLink } from "react-router-dom";

function MyNavBar() {
    return (
        <div className="nav-wrapper">
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-me">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv">CV</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default MyNavBar;
