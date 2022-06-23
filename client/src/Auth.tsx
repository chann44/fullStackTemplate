import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAppContext } from "./context";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { tok } = useAppContext()
  const navigate = useNavigate();

  useEffect(() => {
    console.log(tok);
    if (!tok) {
      navigate("/login");
    }
  }, [tok]);

  return children;
}

export default RequireAuth;
