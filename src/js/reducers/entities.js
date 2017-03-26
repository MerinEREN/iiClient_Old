import {combineReducers} from 'redux'
import accounts from './accounts'
import users from './users'
import offers from './offers'
import demands from './demands'

// Higher-Order Reducer
const entities= combineReducers({
	accounts,
	users,
	offers,
	demands
})

export default entities
