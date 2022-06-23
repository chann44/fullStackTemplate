import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useAppContext } from "./context";

interface Todo {
    task: string
}

const Public = () => {
    const { tok } = useAppContext();
    const [todos, setTodos] = useState<Array<Todo>>([])
    const [todo, setTodo] = useState('')

    const getTodos = async () => {
        const res = await axios.get('http://localhost:5000/', {
            headers: {
                'Authorization': `Bearer ${tok}`
            }
        })

        setTodos(res.data.todos)
        console.log(res)
    }

    useEffect(() => {
        getTodos()
    }, [])
    return (
        <>
            <h1>PUBLIC PAGE IS HERE </h1>
            <form >
                <input type="text" value={todo} onChange={(e) => {
                    e.target.value;
                }} />
            </form>
            {
                todos ? todos.map((todo: any) => {
                    return <div key={todo.id}>
                        <p >{todo.task}</p> <button onClick={async (e) => {
                            const res = await axios.delete(`http://localhost:5000/${todo.id}`, {
                                headers: {
                                    'Authorization': `Bearer ${tok}`
                                }
                            })
                            console.log(res)
                        }}>delete</button>
                    </div>
                }) : null
            }
            <button onClick={() => {
                Cookies.remove('jwt_token')
                window.location.reload()
            }}>
                logout
            </button>
        </>
    )
}

export default Public;