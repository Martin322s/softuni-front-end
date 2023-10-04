import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";

const Logout = memo(() => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/", { replace: true });
    }, [userLogout, navigate]);

    service.logoutUser(user.accessToken)
        .then(() => {
            userLogout();
        });
});

export default Logout;