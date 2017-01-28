import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	REQUEST_ACCOUNT_DATA,
	RECEIVE_ACCOUNT_DATA_SUCCESS,
	RECEIVE_ACCOUNT_DATA_ERROR,
} from './types'

// Action Creators
const requestAccountData = makeActionCreator(REQUEST_ACCOUNT_DATA)
const receiveAccountDataSuccess = makeActionCreator(
	RECEIVE_ACCOUNT_DATA_SUCCESS,
	'data',
	'receivedAt'
)
const receiveAccountDataError = makeActionCreator(
	RECEIVE_ACCOUNT_DATA_ERROR,
	'error'
)

export default function fetchAccountData(hideFetchingProgress, body, url) {
	const URL = url ? url : '/'
	// const headers = new Headers({'Content-Type': 'text/xml'})
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
		const path = state.entities.account.byId
		return dispatch(fetchDomainDataIfNeeded(
			requestAccountData,
			receiveAccountDataSuccess,
			receiveAccountDataError,
			r,
			path,
			hideFetchingProgress
		))
	}
}
