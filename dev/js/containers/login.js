import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LoginComponent from '../components/login'
import {toggleLoginStatus} from '../actions/login'

const mapStateToProps = (state) => {
	return {
		loginURLs: state.loginURLs.byId
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		toggleLoginStatus
	},
		dispatch
	)
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
