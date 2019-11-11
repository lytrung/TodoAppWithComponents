// var addAction = {
// 	type:'ADD_TODO',
// 	payload:{
// 		id:4,
// 		content:'study react',
// 		priority: 'high'
// 	}
// }

// var removeAction = {
// 	type:'REMOVE_TODO',
// 	payload:4
// }

var initialState = []
//Create todosReducer - IMMUTABLE
function todosReducer(state = initialState,action){

	if(action.type == 'ADD_TODO'){
		//add more to state
		return [...state, action.payload]

	}else if (action.type == 'REMOVE_TODO'){
		//remove item from state
		var id = action.payload
		return state.filter((todo) => {
	     	return todo.id !== id;
	    })

	}else if (action.type == 'SET_TODOS'){
		//set items from state
		return [...action.payload]

	}else{
		//do nothing
		return state
	}
}
export default todosReducer













