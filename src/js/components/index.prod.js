import React, {Component}  from 'react'
import {Provider} from 'react-redux'
import configureStore from '../store'
import Theme from '../containers/theme'

const store = configureStore()

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Theme />
			</Provider>
		)
	}
}
