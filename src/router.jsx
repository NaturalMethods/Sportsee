
import { Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout"

import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard"
/*import Profile from "./pages/Profile"*/



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                {/*<Route path="/profile" element={<Profile />} />*/}
                <Route path="*" element={<h1>Error</h1>} />
            </Route>
        </Routes>
    )
}
export default Router