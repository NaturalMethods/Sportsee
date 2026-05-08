
import {Routes, Route } from "react-router-dom"

import Layout from "./Layouts/Layout"

import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard"
import ProtectedLayout from "./Layouts/ProtectedLayout.jsx";
import Error404 from "./pages/Error404.jsx";
import {UserProvider} from "./Context/UserProvider.jsx";
import Profile from "./pages/Profile.jsx";

const Router = () => {
    return (

            <Routes>
                <Route path="/" element={<Login />}/>

                {/* Route protégé */}
                <Route element={<ProtectedLayout />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Route>
                <Route element={<Layout />}>
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>

    )
}
export default Router