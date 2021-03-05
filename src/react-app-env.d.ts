type TodoToAdd = {
    title: string,
    description: string,
    color: string
}

type Todo = {
    _id: string,
    title: string,
    description: string,
    color: string
}

type TodoState = {
    todos: Todo[],
    singleTodo: Todo | null
}

type TodoActions =  {
    type: 'GET_TODOS',
    payload: Todo[]
} | {
    type: 'GET_SINGLE_TODO',
    payload: Todo
} | {
    type: 'CLEAR_SINGLE_TODO',
    payload: null
} | {
    type: 'CREATE_TODO',
    payload: Todo
} | {
    type: 'DELETE_TODO',
    payload: string
} | {
    type: 'DELETE_ALL_TODOS',
    payload: null
} | {
    type: 'UPDATE_TODO',
    payload: Todo
} 

type Dispatch = (action: TodoActions) => any