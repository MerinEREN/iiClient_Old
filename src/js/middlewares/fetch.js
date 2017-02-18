// import fetch from 'isomorphic-fetch'
import {toggleFetching} from '../actions/body'

export default function fetchDomainDataIfNeeded(...args) {
	// Note that the function also receives getState()
	// which lets you choose what to dispatch next.

	// This is useful for avoiding a network request if
	// a cached value is already available.
	return dispatch => {
		if(shouldFetchDomainData(args)) {
			// Dispatch a thunk from thunk.
			return dispatch(fetchDomainData(args))
		} else {
			// Let the calling code know there's nothing to wait for.
			return Promise.resolve()
		}
	}
}

function shouldFetchDomainData(args) {
	let appState
	// args[0], args[1] and args[2] 
	// are action creators.
	// args[3] is request.
	// so i don't need them here.
	// args[4] is domain data.
	if(!args[4].items) {
		return true
	} else if(args[4].isFetching) {
		return false
	} else {
		return args[4].didInvalidate
	}
}

function fetchDomainData(args) {
	return dispatch => {
		// args[0] is request action creator.
		dispatch(args[0]())
		// args[5] is for hiding fetch progress.
		if(!args[5])
			dispatch(toggleFetching())
		// args[1] is success action creators.
		// args[2] is error action creators.
		// args[3] is request.
		// REMOVE IF STATEMENT BELOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			/* if (self.fetch)
			console.log('fetch is supported by the browser')
		else
			console.log('fetch is not supported by the browser,' + 
				'use XMLHttpRequest instead') */
		// return fetch(`http://www.reddit.com/r/${subreddit}.json`)
		return fetch(args[3])
			.then(response => {
				// throw new TypeError('Hello my funny TypeError =)')
				// args[5] is for hiding fetch progress.
				if(!args[5])
					dispatch(toggleFetching())
				if (response.ok) {
					// console.log(response)
					const contentType = response.headers
						.get('content-type')
					if (
						contentType
						&&
						contentType.indexOf('text/html')
						!==
						-1
					) {
						response.text()
							.then(body => 
								dispatch(args[1](body, 
									Date.now()))
							)
					} else if (
						contentType
						&&
						contentType.indexOf('application/json')
						!==
						-1
					) {
						response.json()
							.then(json => 
								dispatch(args[1](json.data.
									children.
									map(child => child.
										data), 
									Date.now()))
							)
					}
					// Backand sending JSON data as Marshald form.
					// So the Content-Type is "text/plain".
					else if (
						contentType
						&&
						contentType.indexOf('text/plain')
						!==
						-1
					) {
						response.text()
							.then(text => {
								const payload = JSON.parse(text)
								dispatch(args[1](
									payload.data, Date.now()))
							}
							)
					}
				} else {
					// response code is not between 199 and 300
					console.log(
						'Response code is not between 199 and '
						+
						'300')
				}
			})
			.catch(err => {
				console.log(
					`There has been a problem with my fetch`
					+
					` operation: ${err.message}`
				)
				dispatch(args[2](err.message))
			})
	}
}
