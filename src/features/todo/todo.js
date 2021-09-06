import React, { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {

    const todo = useSelector(state => state.todo.values)
    const dispatch = useDispatch();
    const [todos, setTodos] = useState("");
    const toggleTodo = () => {
        dispatch(addTodo(todos))
    }

    let todoList = todo.map((todo, key) => (
        <div key={key}>
            {todo}
        </div>
    ))

    return (
        <div>
            <h3>TODO APP</h3>
            <input placeholder="Add Todo..." onChange={e => setTodos(e.target.value)} />
            <button onClick={toggleTodo}>+</button>
            {todoList}
        </div>
    )
}

export default Todo;