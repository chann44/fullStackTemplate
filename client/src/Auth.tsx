import { useAppContext } from "./_context";
import { useLocation, Navigate } from "react-router";
import { useEffect, useState } from "react";
function RequireAuth({ children }: { children: JSX.Element }) {
    let { token } = useAppContext();
    const [auth, setAuth] = useState(false)

    let location = useLocation();

    useEffect(() => {

        console.log(token)
        if (token !== undefined || token !== null) {
            setAuth(true)
        }
    }, [token])
    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;