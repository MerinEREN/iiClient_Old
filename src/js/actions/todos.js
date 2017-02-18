import fetch from 'isomorphic-fetch'
import makeActionCreator from './creator'
import {ADD_NEW_TODO, EDIT_TODO, REMOVE_TODO, SAVE_TODO} from './types'

/*
 * Other Constants
 */

// Actions
export const add = makeActionCreator(ADD_NEW_TODO)
export const edit = makeActionCreator(EDIT_TODO, 'id')
export const remove = makeActionCreator(REMOVE_TODO, 'id')
export const save = makeActionCreator(SAVE_TODO, 'id', 'text')
