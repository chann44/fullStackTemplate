import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Cookies from "js-cookie";

interface APP {
  token: undefined | string;
  setToken: Dispatch<SetStateAction<undefined | string>>;
}

export const AppContext = createContext<APP>({
  token: undefined,
  setToken: () => {},
});

interface APPPROV {
  children: React.ReactNode;
}

export const AppProvider: FC<APPPROV> = ({ children }) => {
  const [token, setToken] = useState<undefined | string>(undefined);
  // const { setToken, token } = React.useContext(AppContext);
  React.useEffect(() => {
    setToken(Cookies.get("jwt_token"));
    console.log(token);
  }, []);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};
