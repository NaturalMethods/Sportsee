import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"

/**
 * return the layout for all pages (not for login  /)
 * @returns {React.JSX.Element}
 * @constructor
 */
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout