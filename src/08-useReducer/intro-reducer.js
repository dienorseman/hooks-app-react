const initialState = [{
    id: 1,
    todo: 'collect the infinite stones',
    done: false,
}]


const todoReducer = ( state = initialState, action = {} ) => {

    if (action.type === '[TODO] add todo') {
        return [ ...state, action.payload ]
    }

    return state;
}

let todos = todoReducer()

console.log( todos );

const newTodo = {
    id: 2, 
    todo: 'collect the power gem',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction )

console.log( todos );