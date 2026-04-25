
import {NavLink} from "react-router-dom"

import "../css/header.css"
import logo from "../assets/logo.svg"
const Header = () => {
    return (
        <header className="flex-row header-container">
            <img src={logo} alt="logo" />
            <nav className="flex-row navmenu">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active nav-link body blue" : "nav-link body black"}>Dashboard</NavLink>
                <NavLink to="/profile" label className={({ isActive }) => isActive ? "active nav-link body blue" : "nav-link body black"}>Mon profil</NavLink>
                <label className="body black">|</label>
                <NavLink className="nav-link body blue">Se déconnecter</NavLink>
            </nav>
        </header>
    )
}

export default Header