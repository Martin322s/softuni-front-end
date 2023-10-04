import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user.accessToken) {
        return <Navigate to="/login" replace />
    }

    return children;
};

export default PrivateRoute;