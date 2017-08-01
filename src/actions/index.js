//action creators

let nextTodoId = 0
export const addTodo = (title, description) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        title,
        description
    }
}

export const archiveTodo = (TodoId) => {
    return {
        type: 'ARCHIVE_TODO',
        id: TodoId
    }
}

export const deleteTodo = (TodoId) => {
    return {
        type: 'DELETE_TODO',
        id: TodoId
    }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}


//essayer proptype