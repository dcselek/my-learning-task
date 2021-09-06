import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
    id: 0
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        addTodo: (state, action) => {
            state.value = action.payload
            state.id += 1
        }
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;