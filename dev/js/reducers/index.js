import {combineReducers} from 'redux'
import loginURLs from './loginURLs'
import entities from './entities'
import ui from './ui'

// Root Reducer
const rootReducer = combineReducers({
	loginURLs,
	entities,
	ui
})

export default rootReducer
