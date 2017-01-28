import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
		this.handleTouchTap = this.handleTouchTap.bind(this)
		this.handleRequestClose = this.handleRequestClose.bind(this)
	}

	handleTouchTap(event) {
		// This prevents ghost click.
		event.preventDefault()
		this.setState({
			open: true,
			anchorEl: event.currentTarget
		})
	}

	handleRequestClose() {
		this.setState({
			open: false
		})
	}

	render() {
		return (
			<div>
				<FlatButton
					label="Login"
					onTouchTap={this.handleTouchTap}
				/>
				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{horizontal: 'left', vertical: 
						'top'}}
						targetOrigin={{horizontal: 'left', vertical: 
							'top'}}
							onRequestClose={this.handleRequestClose}
						>
							<Menu>
								{
									Object.keys(this.props.loginURLs.items).map(key => (
										<MenuItem 
											key={key}
										>
											<a href={this.props.loginURLs.items[key]} onTouchTap={() => this.props.toggleLoginStatus()}>
												{key}
											</a>
										</MenuItem>
									)
									)
								}
							</Menu>
						</Popover>
					</div>
		)
	}
}

	Login.propTypes = {
		loginURLs: PropTypes.object.isRequired,
		toggleLoginStatus: PropTypes.func.isRequired
	}

	export default Login
