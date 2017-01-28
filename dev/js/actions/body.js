import fetchLoginURLs from './loginURLs'
import fetchAccountData from './account'
import fetchUsersData from './users'
// import fetchLogoutURL from './logoutURL'
import makeActionCreator from './creator'
import {
	CHANGE_THEME,
	TOGGLE_DRAWER,
	TOGGLE_FETCHING
} from './types'

// Action Creators
export const changeTheme = makeActionCreator(CHANGE_THEME)
export const toggleDrawer = makeActionCreator(TOGGLE_DRAWER)
export const toggleFetching = makeActionCreator(TOGGLE_FETCHING)

export default function initState(session) {
	if (session) {
		return dispatch => {
			// true means hide fetching progress.
			// dispatch(fetchLogoutURL(true))
			dispatch(fetchAccountData(true))
			dispatch(fetchUsersData()).then(dispatch(toggleDrawer()))
		}
	} else {
		return dispatch => dispatch(fetchLoginURLs())
	}
}
