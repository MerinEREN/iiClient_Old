import React, {PropTypes}  from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// IMPORT FROM CONTAINERS WHEN READY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  
import App from '../components/app'

const Theme = ({theme}) => (
	<MuiThemeProvider muiTheme={theme.value}>
		<App />
	</MuiThemeProvider>
)

Theme.propTypes = {
	theme: PropTypes.object.isRequired
}

export default Theme
