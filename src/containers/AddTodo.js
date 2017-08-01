import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let inputTitle;
    let inputDescription;
    
    return (
        <div>
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    if (!inputTitle.value.trim() || !inputDescription.value.trim()) {
                        return
                    }
                    dispatch(addTodo(inputTitle.value, inputDescription.value))
                    inputTitle.value = ''
                    inputDescription.value = ''
                }}
            >
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title"
                    ref={node => {
                        inputTitle = node
                    }}
                required />
                
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description"
                    ref={node => {
                        inputDescription = node
                    }}
                required />
                
                <button type="submit">
                    Add Todo
                </button>
          </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo