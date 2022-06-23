import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router";
import Cookies from "js-cookie";


const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <h1>Register page </h1>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await axios.post("http://localhost:5000/user/register", {
                        username: name,
                        password: password,
                    });
                    console.log(res)
                    Cookies.remove('jwt_token')
                    navigate('/login')
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

export default Register;
