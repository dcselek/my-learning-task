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
        }
    }
})

export const showTodos = (state) => state.todo
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;