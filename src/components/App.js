import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilterLink from '../containers/FilterLink'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <FilterLink />
        <VisibleTodoList />
    </div>
)

export default App