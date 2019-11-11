import api from '../API'

var todosFactory = {

	set: (todos) => {
		var action = {
			type:'SET_TODOS',
			payload:todos
		}
		return action
	},

	load: () => {
		var thunk = (dispatch) => {
			api.getTodos()
			.then(res => {
				var todos = res.data
				dispatch(todosFactory.set(todos))
			})
		}
		return thunk
	},

	add: (data) => {
		var thunk = (dispatch) => {
			api.addTodos(data)
			.then(res => {
				dispatch(todosFactory.load())
			})
		}
		return thunk
	},
	remove: (id) => {
		var thunk = (dispatch) => {
			api.deleteTodos(id)
			.then(res => {
				dispatch(todosFactory.load())
			})
		}
		return thunk
	},

}

export default todosFactory