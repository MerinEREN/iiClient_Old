import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ToDosComponent from '../components/todos'
import {add, remove} from '../actions/todos'

const mapStateToProps = (state) => {
	return {
		toDos: state.entities.toDos.byId
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

const ToDos = connect(mapStateToProps, mapDispatchToProps)(ToDosComponent)

export default ToDos
