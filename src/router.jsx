
import {Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout"

import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard"
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";
import Error404 from "./components/Error404.jsx";
import {UserProvider} from "./context/UserProvider.jsx";
import Profile from "./pages/Profile.jsx";

const Router = () => {
    return (

        <UserProvider>
            <Routes>
                <Route path="/" element={<Login />}/>

                {/* Route protégé */}
                <Route element={<ProtectedLayout />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        {<Route path="/profile" element={<Profile />} />}
                    </Route>
                </Route>
                <Route element={<Layout />}>
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </UserProvider>
    )
}
export default Router