import { useLocation, Navigate } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context";
import Cookies from "js-cookie";
import Login from "./login";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { token, setToken } = useContext(AppContext);

  let location = useLocation();

  //   useEffect(() => {
  //     console.log(token);
  //     if (token !== undefined || token !== null) {
  //       setAuth(true);
  //     }
  //   }, [token]);
  React.useEffect(() => {
    console.log(Cookies.get("jwt_token"));
    setToken(Cookies.get("jwt_token"));
  }, []);
  //   if (!token) {
  //     // Redirect them to the /login page, but save the current location they were
  //     // trying to go to when they were redirected. This allows us to send them
  //     // along to that page after they login, which is a nicer user experience
  //     // than dropping them off on the home page.
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  //   }
  //   return children;
  return <div>{token ? <div>{children}</div> : <Login />}</div>;
}

export default RequireAuth;
