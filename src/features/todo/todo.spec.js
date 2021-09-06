import todoReducer, {addTodo} from './todoSlice'

describe('todo reducer', () => {
    const initialState = {
        values: ["Aaa"]
    }

    test('should initial state value equal output', () => {
        const todoValue = todoReducer(initialState, addTodo("Bbb"))
        expect(todoValue).toEqual("Bbb")
    })
})

