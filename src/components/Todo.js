import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({title, description, archived, onDeleteClick, onArchiveClick}) => (
    <div className='todo'>
        <div className='todoText'>
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
        </div>
        <div className='options'>
            <div className='delete' onClick={onDeleteClick}/>
            <div className='archive'>
                <span>{archived ? "Archived note!" : "Active note!"}</span>
                <input type="checkbox"  checked={archived} onChange={onArchiveClick}></input> 
            </div>
        </div>
    </div>
)


Todo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired
}

export default Todo