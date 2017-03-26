import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	USERS_REQUEST,
	USERS_SUCCESS,
	USERS_FAILURE,
} from './types'

// Action Creators
export const usersRequest = makeActionCreator(
	USERS_REQUEST, 
	'accountId'
)
export const usersSuccess = makeActionCreator(
	USERS_SUCCESS,
	'response',
	'receivedAt', 
	'accountId'
)
export const usersFailure = makeActionCreator(
	USERS_FAILURE,
	'error', 
	'accountId'
)

export default function loadUsersByAccount(url, args) {
	const {paginationId: accountId} = args
	const headers = new Headers({'Accept': 'text/plain'})
	// const body = JSON.stringify({data: as})
	const init = {
		// method: 'POST',
		credentials: "same-origin",
		// body,
		headers: headers,
		// referrer: '/MerinEREN',
		// mode: 'no-cors'
	}
	const r = new Request(url, init)
	return (dispatch) => {
		// Can add a "hideFetching" property to hide fetching progress component.
		return dispatch(fetchDomainDataIfNeeded({
			actionsRequest: [usersRequest],
			actionsSuccess: [usersSuccess],
			actionsFailure: [usersFailure],
			request: r,
			// CHANGE THIS BELOW
			isCached: state => state.pagination.usersByAccount[props.accountId].isFetching, 
			paginationId
		}))
	}
}
/* export default function fetchMaker(args) {
	return function(URL, body) {
		const URL = url ? url : '/'
		// const headers = new Headers({'Content-Type': 'text/xml'})
		const init = {
			method: 'POST',
			body
			// headers: headers,
			// referrer: '/MerinEREN',
			// mode: 'no-cors'
		}
		const r = new Request(URL, init)
		return (dispatch, getState) => {
			const state = getState()
			const path = state.entities.users.byId
			return dispatch(fetchDomainDataIfNeeded(
				args[0],
				args[1],
				args[2],
				r,
				path
			))
		}
	}
} */
