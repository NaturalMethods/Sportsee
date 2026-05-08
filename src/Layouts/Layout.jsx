import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"

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