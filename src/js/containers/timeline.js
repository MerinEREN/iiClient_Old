import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TimelineComponent from '../components/timeline'
import {add, remove} from '../actions/timeline'

// Can use ownProps here.
const mapStateToProps = state => {
	const {demands, offers} = state
	return {
		items: {demands, offers}
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addNewToDo: add,
		removeToDo: remove
	},
		dispatch
	)
}

const Timeline = connect(mapStateToProps, mapDispatchToProps)(TimelineComponent)

export default Timeline
