import React from "react"
import logo from "./Images/React-icon.png"
function Header() {
    return (
        <header>
            <nav className="nav-1">
                <img src={logo} className="nav-logo" />
                <h3>ReactFacts</h3>
                <ul className="nav-items">
                
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;