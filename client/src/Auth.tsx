import { useLocation, Navigate, useNavigate } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context";
import Cookies from "js-cookie";
import Login from "./login";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(token);
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return children;
}

export default RequireAuth;
