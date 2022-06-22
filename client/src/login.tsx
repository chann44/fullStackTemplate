import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    return (
        <>
            <h1>Login page </h1>
            <form onSubmit={
                async (e) => {
                    e.preventDefault()
                    const res = await axios.post('http://localhost:5000/user/login', {
                        username: name,
                        password: password
                    })
                    const token = res.data.data.jwt_token;
                    console.log(token)
                    if (token) {
                        Cookies.set("jwt_token", token)
                        console.log("hit the homepage ")
                        navigate("/")
                    }
                }
            }>
                <label htmlFor="username">userName</label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <label htmlFor="password">userName</label>
                <input type="text" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />

                <input type="submit" />
            </form>
        </>
    )
}

export default Login;