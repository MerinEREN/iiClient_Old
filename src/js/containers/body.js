import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BodyComponent from '../components/body'
import loadData, {changeTheme, toggleDrawer} from '../actions/body'
// Needed for onTouchTap, REMOVE WHEN REACT HAS THIS FEATURE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// It's a mobile friendly onClick() alternative for all components in Material-UI 
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// Can use "ownProps" here
// For accessing params for example.
const mapStateToProps = state => {
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
	const {
		isFetching, 
		ui: {selectedTheme, openDrawer}, 
		entities: {accounts, users}
	} = state
	return {
		theme: selectedTheme,
		isFetching,
		acc: accounts.byId[accounts.allIds[0]], 
		user: users.byId[users.allIds[0]], 
		open: openDrawer
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		loadData,
		changeTheme,
		toggleDrawer
	},
	dispatch
)

const Body = connect(mapStateToProps, mapDispatchToProps)(BodyComponent)

export default Body
