// import union from 'lodash/union'

// Returns slice reducer for given action type/function pairs in handlers
export default function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if(handlers.hasOwnProperty(action.type))
			return handlers[action.type](state, action)
		return state
	}
}

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export const paginate = ({types, mapActionToKey}) => {
	if (!Array.isArray(types) || types.length !== 3) {
		throw new Error('Expected types to be an array of three elements.')
	}
	if (!types.every(t => typeof t === 'string')) {
		throw new Error('Expected types to be strings.')
	}
	/* if (typeof mapActionToKey !== 'function') {
		throw new Error('Expected mapActionToKey to be a function.')
	} */

	const [requestType, successType, failureType] = types

	const updatePagination = (state = {
		isFetching: false,
		// didInvalidate: true,
		nextPageUrl: undefined,
		pageCount: 0,
		ids: [],
		// error: false
	}, action) => {
		switch (action.type) {
			case requestType:
				return {
					...state,
					isFetching: true
				}
			case successType:
				return {
					...state,
					isFetching: false,
					// ids: union(state.ids, action.response.result),
					ids: mergeKeysIntoArray(state.ids, action.response.result), 
					nextPageUrl: action.response.nextPageUrl,
					pageCount: state.pageCount + 1
				}
			case failureType:
				return {
					...state,
					isFetching: false, 
				}
			default:
				return state
		}
	}

	return (state = {}, action) => {
		switch (action.type) {
			case requestType:
			case successType:
			case failureType:
				const key = mapActionToKey(action)
				if (typeof key !== 'string') {
					throw new Error('Expected key to be a string.')
				}
				return {
					...state,
					[key]: updatePagination(state[key], action)
				}
			default:
				return state
		}
	}
}

export const updateObject = (oldObject, newValues) => {
	// Encapsulate the idea of passing a new object as the first parameter
	// to Object.assign to ensure we correctly copy data instead of mutating
	return Object.assign({}, oldObject, newValues);
}

export const updateItemInArray = (array, itemId, updateItemCallback) => {
	const updatedItems = array.map(item => {
		if(item.id !== itemId) {
			// Since we only want to update one item, 
			// preserve all others as they are now
			return item;
		}
		// Use the provided callback to create an updated item
		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});
	return updatedItems;
}

export const mergeKeysIntoArray = (a, o) => {
	let ids = []
	Object.keys(o).forEach(k => ids.push(k))
	return [...a, ...ids]
}
/* const newTodos = updateItemInArray(
	state.todos, 
	action.id, 
	todo => {
		return updateObject(todo, {completed : !todo.completed})
	}
) */
