import {combineReducers} from 'redux'
import account from './account'
import users from './users'
import todosReducer from './todos'

// Higher-Order Reducer
const entities= combineReducers({
	account,
	users,
	toDos: todosReducer
})

export default entities
