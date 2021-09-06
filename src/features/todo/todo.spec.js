import todoReducer, {addTodo} from './todoSlice'

describe('todo reducer', () => {
    const initialState = {
        value: "Bbb"
    }

    test('should initial state value equal output', () => {
        const todoValue = todoReducer(initialState, addTodo("Bbb"))
        expect(todoValue.value).toEqual("Bbb")
    })
})

