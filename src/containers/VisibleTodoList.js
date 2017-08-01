import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { deleteTodo } from '../actions'
import { archiveTodo } from '../actions'

const mapStateToProps = state => {
    switch (state.visibilityFilter){
        case ('SHOW_ACTIVE_TODOS'):
            return {
                todos: state.todos.filter((todo) => {
                    return todo.archived === false;
                })
            }
        case ('SHOW_ARCHIVED_TODOS'):
            return {
                todos: state.todos.filter((todo) => {
                    return todo.archived === true;
                })
            }
        default:
            /* default ne sert qu'à l'initialisation de la page, c'est à dire quand il n'y aucune note. Ensuite
            lorqu'on ajoute une note, l'état devient 'SHOW_ACTIVE_TODOS'*/
            return {
                todos: {}
            }
        }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteClick: id => {
            dispatch(deleteTodo(id))
        },
        onArchiveClick: id => {
            dispatch(archiveTodo(id))
        }
    }
} 

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList