import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({onSetVisibilityClick}) => (
    <div className='todo'>
        <button onClick={() => onSetVisibilityClick('SHOW_ACTIVE_TODOS')}>Active</button>
        <button onClick={() => onSetVisibilityClick('SHOW_ARCHIVED_TODOS')}>Archived</button>
    </div>
)

Filter.propTypes = {
    onSetVisibilityClick: PropTypes.func.isRequired
}

export default Filter