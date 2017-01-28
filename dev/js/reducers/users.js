import {combineReducers} from 'redux'
import createReducer from './creator'
import {
	REQUEST_USERS_DATA,
	RECEIVE_USERS_DATA_SUCCESS,
	RECEIVE_USERS_DATA_ERROR
} from '../actions/types'

// Case Reducers
function requestUsersData(state, action) {
	return {
		...state,
		isFetching: true
	}
}
function receiveUsersDataSuccess(state, action) {
	let u = {}
	u[action.data.user.UUID] = action.data.user
	return {
		...state,
		isFetching: false,
		didInvalidate: false,
		items: u,
		error: false,
		lastUpdated: action.receivedAt
	}
}
function receiveUsersDataError(state, action) {
	return {
		...state,
		isFetching: false,
		didInvalidate: true,
		error: action.error,
		lastUpdated: action.receivedAt
	}
}
function pushUser(state, action) {
	let allIds = [...state]
	allIds.push(action.data.user.UUID)
	return allIds
}

// Slice Reducers
const byId = createReducer(
	{
		isFetching: false,
		didInvalidate: true,
		items: {},
		error: false,
		lastUpdated: null
	}, 
	{
		REQUEST_USERS_DATA: requestUsersData,
		RECEIVE_USERS_DATA_SUCCESS: receiveUsersDataSuccess,
		RECEIVE_USERS_DATA_ERROR: receiveUsersDataError
	}
)
const allIds = createReducer(
	[], 
	{
		RECEIVE_USERS_DATA_SUCCESS: pushUser
	}
)

// Higher-Order Reducer
const users = combineReducers({
	byId,
	allIds
})

export default users
