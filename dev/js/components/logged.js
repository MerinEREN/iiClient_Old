import React, {PropTypes} from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const Logged = ({toggleLoginStatus}) => (
	<IconMenu
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		{/* GET THOSE ITEMS FROM PROPS */}
		<MenuItem primaryText="Refresh" />
		<MenuItem primaryText="Help" />
		<MenuItem primaryText="Sign out" onTouchTap={() => toggleLoginStatus()}/>
	</IconMenu>
)

Logged.propTypes = {
	toggleLoginStatus: PropTypes.func.isRequired
}

// My custom 'Logged' component acts like 'IconMenu' mui component !!!!!!!!!!!!!!!!!!!!!!!
Logged.muiName = 'IconMenu'

export default Logged
