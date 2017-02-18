import fetchAccountData from './account'
import fetchUsersData from './users'
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

export default function initState(acc) {
	return dispatch => {
		dispatch(fetchAccountData(acc)).then(dispatch(toggleDrawer()))
	}
}
