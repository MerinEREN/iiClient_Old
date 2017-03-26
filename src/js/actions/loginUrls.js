import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	LOGIN_URLS_REQUEST,
	LOGIN_URLS_SUCCESS,
	LOGIN_URLS_FAILURE,
} from './types'

// Action Creators
const loginUrlsRequest = makeActionCreator(LOGIN_URLS_REQUEST)
const loginUrlsSuccess = makeActionCreator(
	LOGIN_URLS_SUCCESS,
	'response',
	'receivedAt'
)
const loginUrlsFailure = makeActionCreator(
	LOGIN_URLS_FAILURE,
	'error'
)

export default function loadLoginUrls() {
	const URL = '/'
	const headers = new Headers({'Accept': 'text/plain'})
	const init = {
		// method: 'POST',
		// credentials: "same-origin",
		headers
	}
	const r = new Request(URL, init)
	return (dispatch) => {
		// Add a "hideFetching" property to hide fetching progress component.
		return dispatch(fetchDomainDataIfNeeded({
			actionsRequest: [loginUrlsRequest],
			actionsSuccess: [loginUrlsSuccess],
			actionsFailure: [loginUrlsFailure],
			request: r,
			isCached: state => Object.keys(state.loginUrls.items).length
		}))
	}
}
