import todoReducer, {addTodo, removeTodo} from './todoSlice'

describe('todo reducer', () => {
    const initialState = {
        values: ["Aaa"]
    }

    test('should initial state value equal output', () => {
        const todoValue = todoReducer(initialState, addTodo("Bbb"))
        expect(todoValue.values).toEqual(["Aaa","Bbb"])
    })

    test('should entered value will be deleted value', () => {
        let todoValue = todoReducer(initialState, removeTodo(0))
        expect(todoValue.values).toEqual([[]])
    })
    
})

