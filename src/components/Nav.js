import React from "react"
import logo from "../pics/airbnb-logo.png"

export default function Nav() {
    return (
        <nav className="nav--container">
            <img src={logo} alt="Airbnb Logo" className="nav--logo"/>
        </nav>
    )
}