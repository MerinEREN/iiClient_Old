import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	ACCOUNTS_REQUEST,
	ACCOUNTS_SUCCESS,
	ACCOUNTS_FAILURE,
} from './types'

// Action Creators
export const accountsRequest = makeActionCreator(ACCOUNTS_REQUEST)
export const accountsSuccess = makeActionCreator(
	ACCOUNTS_SUCCESS,
	'response',
	'receivedAt'
)
export const accountsFailure = makeActionCreator(
	ACCOUNTS_FAILURE,
	'error'
)

// Should be loadAccountsByTags in the future !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Get tags as args to filter result.
export default function loadAccounts(url, args) {
	const URL = url || '/accounts'
	const init = {
		// method: 'POST',
		credentials: "same-origin",
		// body,
		headers,
		// referrer: '/MerinEREN',
		// mode: 'no-cors'
	}
	if(args) {
		init.method = 'POST'
		init.body = JSON.stringify(args)
	}
	const headers = new Headers({'Accept': 'text/plain'})
	const r = new Request(URL, init)
	return (dispatch) => {
// Can add a "hideFetching" property to hide fetching progress component.
		// Can add "paginationId" property to group by that id in pagination.
		return dispatch(fetchDomainDataIfNeeded({
			actionsRequest: [accountsRequest],
			actionsSuccess: [accountsSuccess],
			actionsFailure: [accountsFailure],
			request: r,
			// CHANGE THIS BELOW
			isCached: state => state.pagination.accounts.all.isFetching
		}))
	}
}
