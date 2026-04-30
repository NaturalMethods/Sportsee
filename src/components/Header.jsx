
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


import "../css/header.css"
import logo from "../assets/logo.svg"
const Header = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setUser(null);
        navigate("/");
    };

    return (
        <header className="flex-row header-container">
            <img src={logo} alt="logo" />
            <nav className="flex-row navmenu">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active nav-link body blue" : "nav-link body black"}>Dashboard</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? "active nav-link body blue" : "nav-link body black"}>Mon profil</NavLink>
                <span className="body black">|</span>
                <span onClick={handleLogout} className="nav-link body blue" style={{ cursor: "pointer" }}>
                    Se déconnecter
                </span>
            </nav>
        </header>
    )
}

export default Header