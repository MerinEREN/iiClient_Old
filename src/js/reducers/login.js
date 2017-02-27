import {combineReducers} from 'redux'
import createReducer from './utilities'
import {
	REQUEST_LOGIN_URLS,
	RECEIVE_LOGIN_URLS_SUCCESS,
	RECEIVE_LOGIN_URLS_ERROR
} from '../actions/types'

// Case Reducers
function requestLoginURLs(state, action) {
	return {
		...state,
		isFetching: true
	}
}
function receiveLoginURLsSuccess(state, action) {
	return {
		...state,
		isFetching: false,
		didInvalidate: false,
		items: action.data,
		error: false,
		lastUpdated: action.receivedAt
	}
}
function receiveLoginURLsError(state, action) {
	return {
		...state,
		isFetching: false,
		didInvalidate: true,
		items: {},
		error: action.error,
		lastUpdated: action.receivedAt
	}
}
function pushURLs(state, action) {
	let allIds = [...state]
	Object.keys(action.data).forEach(key => allIds.push(key))
	return allIds
}

// Slice Reducer
const byId = createReducer(
	{
		isFetching: false,
		didInvalidate: true,
		items: {},
		error: false,
		lastUpdated: null
	},
	{
		REQUEST_LOGIN_URLS: requestLoginURLs,
		RECEIVE_LOGIN_URLS_SUCCESS: receiveLoginURLsSuccess,
		RECEIVE_LOGIN_URLS_ERROR: receiveLoginURLsError
	}
)
const allIds = createReducer(
	[],
	{
		RECEIVE_LOGIN_URLS_SUCCESS: pushURLs
	}
)

// Higher-Order Reducer
const loginURLs = combineReducers({
	byId,
	allIds
})

export default loginURLs
