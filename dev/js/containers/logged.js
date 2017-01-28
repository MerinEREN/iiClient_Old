import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LoggedComponent from '../components/logged'
import {toggleLoginStatus} from '../actions/login'

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		toggleLoginStatus
	},
		dispatch
	)
}

const Logged = connect(mapStateToProps, mapDispatchToProps)(LoggedComponent)

export default Logged

