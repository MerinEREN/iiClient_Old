import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BodyComponent from '../components/body'
import initState, {changeTheme, toggleDrawer} from '../actions/body'
// Needed for onTouchTap, REMOVE WHEN REACT HAS THIS FEATURE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// It's a mobile friendly onClick() alternative for all components in Material-UI 
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const mapStateToProps = (state) => {
	/* const { selectedReddit, postsByReddit } = state
	  const {
		      isFetching,
		      lastUpdated,
		      items: posts
		    } = postsByReddit[selectedReddit] || {
				isFetching: true,
				items: []
			      }

	  return {
		      selectedReddit,
		      posts,
		      isFetching,
		      lastUpdated
		    } */
	return {
		theme: state.ui.selectedTheme,
		isFetching: state.ui.isFetching,
		open: state.ui.openDrawer
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		initState,
		changeTheme,
		toggleDrawer
	},
		dispatch
	)
}

const Body = connect(mapStateToProps, mapDispatchToProps)(BodyComponent)

export default Body
