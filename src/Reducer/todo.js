export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO': 
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            }
        default: 
            return state
    }
}