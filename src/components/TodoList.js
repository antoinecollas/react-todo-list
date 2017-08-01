import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { CSSTransitionGroup } from 'react-transition-group'

const TodoList = ({todos, onDeleteClick, onArchiveClick}) => (
    <div>
        <CSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {todos.map(todo => (
                <Todo key={todo.id} title={todo.title} description={todo.description} archived={todo.archived} onDeleteClick={() => onDeleteClick(todo.id)} onArchiveClick={() => onArchiveClick(todo.id)}/>
            ))}
        </CSSTransitionGroup>
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onArchiveClick: PropTypes.func.isRequired
}

export default TodoList