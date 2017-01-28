import {combineReducers} from 'redux'
import selectedTheme from './theme'
import {openDrawer, isFetching} from './body'

// Higher-Order Reducer
const ui = combineReducers({
	selectedTheme,
	openDrawer,
	isFetching
})

export default ui
