import {combineReducers} from 'redux'
import createReducer from './creator'
import {
	REQUEST_ACCOUNT_DATA,
	RECEIVE_ACCOUNT_DATA_SUCCESS,
	RECEIVE_ACCOUNT_DATA_ERROR
} from '../actions/types'

// Case Reducers
function requestAccountData(state, action) {
	return {
		...state,
		isFetching: true
	}
}
function receiveAccountDataSuccess(state, action) {
	let acc = {}
	acc[action.data.account.Name] = action.data.account
	return {
		...state,
		isFetching: false,
		didInvalidate: false,
		items: acc,
		error: false,
		lastUpdated: action.receivedAt
	}
}
function receiveAccountDataError(state, action) {
	return {
		...state,
		isFetching: false,
		didInvalidate: true,
		error: action.error,
		lastUpdated: action.receivedAt
	}
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
		REQUEST_ACCOUNT_DATA: requestAccountData,
		RECEIVE_ACCOUNT_DATA_SUCCESS: receiveAccountDataSuccess,
		RECEIVE_ACCOUNT_DATA_ERROR: receiveAccountDataError
	}
)

//Higher-Order Reducer
const account = combineReducers({
	byId
})

export default account
