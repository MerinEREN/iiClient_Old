import {combineReducers} from 'redux'
import createReducer, {mergeKeysIntoArray, mergeObjectsIntoObject} from './utilities'
import {paginate} from './utilities'
import {
	DEMANDS_REQUEST, 
	DEMANDS_SUCCESS, 
	DEMANDS_FAILURE
} from '../actions/types'

// Case Reducers
function mergeById(state, action) {
	return mergeObjectsIntoObject(state, action.response.result)
}
function pushIds(state, action) {
	return mergeKeysIntoArray(state, action.response.result)
}

// Slice Reducers
const byId = createReducer(
	{}, 
	{
		DEMANDS_SUCCESS: mergeById
	}
)
const allIds = createReducer(
	[], 
	{
		DEMANDS_SUCCESS: pushIds
	}
)
export const demandsByUser = paginate({
	mapActionToKey: action => Object.keys(action.response.result).forEach(v => v.user_id), 
	types: [
		DEMANDS_REQUEST, 
		DEMANDS_SUCCESS, 
		DEMANDS_FAILURE
	]
})

// Higher-Order Reducer
const demands = combineReducers({
	byId,
	allIds
})

export default demands
