import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { setVisibilityFilter } from '../actions'

const mapDispatchToProps = dispatch => {
    return {
        onSetVisibilityClick: (filter) => {
            return dispatch(setVisibilityFilter(filter))
        }
    }
} 

const FilterLink = connect(
    undefined,
    mapDispatchToProps
)(Filter)

export default FilterLink