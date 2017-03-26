import fetchDomainDataIfNeeded from '../middlewares/fetch'
import makeActionCreator from './creator'
import {
	USER_ACCOUNT_REQUEST, 
	USER_ACCOUNT_SUCCESS, 
	USER_ACCOUNT_FAILURE, 
	CHANGE_THEME,
	TOGGLE_DRAWER,
	TOGGLE_FETCHING
} from './types'

// Action Creators
export const changeTheme = makeActionCreator(CHANGE_THEME)
export const toggleDrawer = makeActionCreator(TOGGLE_DRAWER)
export const toggleFetching = makeActionCreator(TOGGLE_FETCHING)
// Don't effect anything for now.
const userAccountRequest = makeActionCreator(
	USER_ACCOUNT_REQUEST
)
const userAccountSuccess = makeActionCreator(
	USER_ACCOUNT_SUCCESS, 
	'response', 
	'receivedAt'
)
// Don't effect anything for now.
const userAccountFailure = makeActionCreator(
	USER_ACCOUNT_FAILURE, 
	'error'
)

const loadUserAccount = () => {
	const URL = '/'
	const headers = new Headers({'Accept': 'text/plain'})
	const init = {
		credentials: "same-origin",
		headers
	}
	const r = new Request(URL, init)
	return (dispatch) => {
		// Can add a "hideFetching" property to hide fetching progress component.
		// Can add a "isCached" property to check existincy.
		// Can add "paginationId" property to group by that id in pagination.
		return dispatch(fetchDomainDataIfNeeded({
			actionsRequest: [userAccountRequest],
			actionsSuccess: [userAccountSuccess],
			actionsFailure: [userAccountFailure],
			request: r
		}))
	}
}

export default function loadData() {
	return dispatch => {
		dispatch(loadUserAccount()).then(dispatch(toggleDrawer()))
	}
}
