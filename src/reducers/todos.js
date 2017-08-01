const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    archived: false
                }
            ]
        case 'ARCHIVE_TODO':
            return state.map((todo) => {
                if(todo.id === action.id)
                    todo.archived = !todo.archived;
                return todo;
            })
            
        case 'DELETE_TODO':
            return state.filter((todo) => {
                return todo.id !== action.id;
            })
            
        default:
            return state
        
        }
}

export default todos