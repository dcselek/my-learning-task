import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    values: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.values.push(action.payload)
        },
        removeTodo: (state, action) => {
            let removeTodo = state.values[action.payload]
            let newTodos = state.values.filter(todos => todos !== removeTodo)
            state.values = [];
            state.values.push(newTodos)
        }
    }
})

export const showTodos = (state) => state.todo
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;