describe('todo reducer', () => {
    const initialState = {
        value: "Bbb"
    }

    test('should initial state value equal output', () => {
        const todoValue = todoReducer(initialState, addTodo())
        expect(todoValue.value).toEqual("Bbb")
    })
})

