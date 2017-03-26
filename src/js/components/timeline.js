import React, {PropTypes}  from "react"
import muiThemeable from 'material-ui/styles/muiThemeable'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import ToDo from "../containers/todo"

const Timeline = ({muiTheme, params, items, addNewToDo, removeToDo}) => (
	<div>
		{
			// Test for params
			// CAN'T DECLARE A VARIABLE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			// const {user} = params
			params.user !== "MerinEREN" && 
				<Link
					style={{color: muiTheme.palette.textColor}}
					to="MerinEREN"
					activeStyle={{
						textDecoration: 'none',
						color: 'black'
					}}
				>
					Navigate to Merin
				</Link>
		}
		<FlatButton
			label="Add New"
			onTouchTap={() => addNewToDo()}
		/>
		{/* 
			items.map((toDo, i) => 
				<ToDo
					key={i}
					index={i}
					{...toDo}
					remove={() => removeToDo(i)}
				/>
			)
			*/}
			{/*
			for(const todo of items) {
				return (
					<ToDo
						key={todo.id}
						index={todo.id}
						{...todo}
						remove={() => removeToDo(todo.id)}
					/>
				)
			}
			*/}
			{
				/* Object.keys(items).map(function (key) {
					let todo = items[key];
					return (
						<ToDo
							key={todo.id}
							{...todo}
							remove={() => removeToDo(todo.id)}
						/>
					)
				}) */
			}
		</div>
)

Timeline.propTypes = {
	muiTheme: PropTypes.object.isRequired,
	params: PropTypes.object.isRequired,
	items: PropTypes.objectOf(PropTypes.shape({
		offers: PropTypes.objectOf(PropTypes.shape({
			id: PropTypes.number.isRequired, 
			children: PropTypes.node.isRequired, 
			editable: PropTypes.bool.isRequired
		})),
		demands: PropTypes.objectOf(PropTypes.shape({
			id: PropTypes.number.isRequired, 
			children: PropTypes.node.isRequired, 
			editable: PropTypes.bool.isRequired
		}))
	})),
	addNewToDo: PropTypes.func.isRequired,
	removeToDo: PropTypes.func.isRequired
}

export default muiThemeable()(Timeline)
