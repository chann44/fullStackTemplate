import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";


import RequireAuth from "./Auth";
import Cookies from "js-cookie";
import { AppContext } from "./_context";
import Todos from "./Todos";
import Login from "./login";
import Register from "./Register";
import { useCookies } from "react-cookie";
export default function App() {
  const [token, setToken] = React.useState<any>('')
  const sharedState = {
    token, setToken
  }

  React.useEffect(() => {
    console.log(Cookies.get('jwt_token'))
    setToken(Cookies.get("jwt_token"))
  }, [])



  return (
    <>
      <AppContext.Provider value={sharedState}>
        <Routes>
          <Route path="/" element={
            <RequireAuth >
              <Todos />
            </RequireAuth>
          } />
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/register" element={
            <Register />
          } />
          <Route path="*" element={
            <>
              <p>404</p>
            </>
          } />
        </Routes>
      </AppContext.Provider>


    </>
  );
}

