import React from "react"
import {Route, IndexRoute} from 'react-router'
import Body  from './containers/body'
import ToDos  from './containers/todos'
import Settings  from './components/settings'
import Feedback  from './components/feedback'
import Help  from './components/help'

// AVOIDING GETTING ERROR WHEN RE-RENDERING BECAUSE OF muiTheme CHANGES !!!!!!!!!!!!!!!!!!!
const routes = (
	<Route path="/" component={Body}>
		<IndexRoute component={ToDos} />
		<Route path="/MenuLink1" component={ToDos} />
		<Route path="/MenuLink2" component={ToDos} />
		<Route path="/MenuLink3" component={ToDos} />
		<Route path="/MenuLink4" component={ToDos} />
		<Route path="/MenuLink5" component={ToDos} />
		<Route path="/Settings" component={Settings} />
		<Route path="/Feedback" component={Feedback} />
		<Route path="/Help" component={Help} />
	</Route>
)

export default routes
