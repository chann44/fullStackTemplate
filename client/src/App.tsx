import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import RequireAuth from "./Auth";
import { AppProvider } from "./context";
import Todos from "./Todos";
import Login from "./login";
import Register from "./Register";
export default function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Todos />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <>
                <p>404</p>
              </>
            }
          />
        </Routes>
      </AppProvider>
    </>
  );
}
