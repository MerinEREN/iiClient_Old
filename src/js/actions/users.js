import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	REQUEST_USERS_DATA,
	RECEIVE_USERS_DATA_SUCCESS,
	RECEIVE_USERS_DATA_ERROR,
} from './types'

// Action Creators
const requestUsersData = makeActionCreator(REQUEST_USERS_DATA)
const receiveUsersDataSuccess = makeActionCreator(
	RECEIVE_USERS_DATA_SUCCESS,
	'data',
	'receivedAt'
)
const receiveUsersDataError = makeActionCreator(
	RECEIVE_USERS_DATA_ERROR,
	'error'
)

export default function fetchUsersData(args, url) {
	const URL = url || '/'
	const as = args || {}
	// const headers = new Headers({'Content-Type': 'text/xml'})
	const body = JSON.stringify({data: as})
	const init = {
		method: 'POST',
		credentials: "same-origin",
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
			requestUsersData,
			receiveUsersDataSuccess,
			receiveUsersDataError,
			r,
			path
		))
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
