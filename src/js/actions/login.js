import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	REQUEST_LOGIN_URLS,
	RECEIVE_LOGIN_URLS_SUCCESS,
	RECEIVE_LOGIN_URLS_ERROR,
} from './types'

// Action Creators
const requestLoginURLs = makeActionCreator(REQUEST_LOGIN_URLS)
const receiveLoginURLsSuccess = makeActionCreator(
	RECEIVE_LOGIN_URLS_SUCCESS,
	'data',
	'receivedAt'
)
const receiveLoginURLsError = makeActionCreator(
	RECEIVE_LOGIN_URLS_ERROR,
	'error'
)

export default function fetchLoginURLs() {
	const init = {
		method: 'POST',
		// credentials: "same-origin"
	}
	const r = new Request("/", init)
	return (dispatch, getState) => {
		const state = getState()
		const path = state.loginURLs.byId
		return dispatch(fetchDomainDataIfNeeded(
			requestLoginURLs,
			receiveLoginURLsSuccess,
			receiveLoginURLsError,
			r,
			path
		))
	}
}
