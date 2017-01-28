import makeActionCreator from './creator'
import {TOGGLE_LOGIN_STATUS} from './types'

export const toggleLoginStatus = makeActionCreator(TOGGLE_LOGIN_STATUS)
