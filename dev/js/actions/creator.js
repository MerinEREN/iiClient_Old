export default function makeActionCreator(type, ...argNames) {
	return (...args) => {
		let action = {type}
		argNames.forEach((argName, i) => {
			action[argName] = args[i]
		})
		return action
	}
}
