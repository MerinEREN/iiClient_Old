import {combineReducers} from 'redux'
import {accountsInPagination as accounts} from './accounts'
import {usersByAccount} from './users'
import {demandsByUser} from './demands'
// import * as ActionTypes from './types'

// Higher-Order Reducer
const pagination = combineReducers({
	accounts, 
	usersByAccount,
	demandsByUser
})

export default pagination
