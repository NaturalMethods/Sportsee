import { Navigate, Outlet } from "react-router-dom";


/**
 * Return user to the login page if they don't have a token
 * @returns {React.JSX.Element}
 * @constructor
 */
const ProtectedLayout = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedLayout;