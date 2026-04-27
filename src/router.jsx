
import {Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout"

import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard"
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";
import Error404 from "./components/Error404.jsx";
/*import Profile from "./pages/Profile"*/


const Router = () => {
    return (


        <Routes>
            <Route path="/" element={<Login />}/>

            {/* Route protégé */}
            <Route element={<ProtectedLayout />}>

                    <Route path="/dashboard" element={<Dashboard />} />
                    {/*<Route path="/profile" element={<Profile />} />*/}
            </Route>
            <Route element={<Layout />}>
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    )
}
export default Router