import { createContext, useContext, useEffect } from "react";
import Cookies from "js-cookie"

let intial_value: any = {};

export const AppContext = createContext(intial_value);

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }: any) => {
  const tok = Cookies.get("jwt_token");

  return (
    <AppContext.Provider value={{ tok }}>
      {children}
    </AppContext.Provider>
  );
};
