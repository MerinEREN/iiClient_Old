import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchLoginURLs from '../actions/login'
import LoginComponent from '../components/login'

const mapStateToProps = (state) => {
	return {
		loginURLs: state.loginURLs.byId
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchLoginURLs
	}, 
		dispatch
	)
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
