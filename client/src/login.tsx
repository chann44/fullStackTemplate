import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router";
import Cookies from "js-cookie";
import { useAppContext } from "./context";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { tok } = useAppContext()

  useEffect(() => {
    if (tok) {
      navigate("/");
    }
  }, [tok]);

  return (
    <>
      <h1>Login page </h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await axios.post("http://localhost:5000/user/login", {
            username: name,
            password: password,
          });
          const restoken = res.data.data.jwt_token;
          console.log(restoken);
          if (restoken) {
            Cookies.set("jwt_token", restoken);
            console.log("hit the homepage ");
            window.location.replace('http://localhost:3000')
          }
        }}
      >
        <label htmlFor="username">userName</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="password">userName</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
