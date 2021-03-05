const initState: TodoState = {
    todos: [],
    singleTodo: null
};

export const todoReducer = (state = initState, action: TodoActions) => {
    switch(action.type){
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload
            }

        case 'GET_SINGLE_TODO':
            return {
                ...state,
                singleTodo: action.payload
            }

        case 'CLEAR_SINGLE_TODO':
            return {
                ...state,
                singleTodo: null
            }    

        case 'CREATE_TODO':
            return {
                ...state,
                todos: [ ...state.todos, action.payload]
            }

        case 'DELETE_TODO':
            const filteredTodos = state.todos.filter(todo => todo._id !== action.payload);
            return {
                ...state,
                todos: filteredTodos
            }

            case 'DELETE_ALL_TODOS':
                return {
                    ...state,
                    todos: []
                }

        case 'UPDATE_TODO':
            const updatedtodos = state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo);
            return {
                ...state,
                todos: updatedtodos
            }

        default:
            return state;
    }
}