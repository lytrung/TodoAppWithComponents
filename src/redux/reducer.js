const initialState = [
        {
          id:1,
          content: 'Ring Peter',
          priority: 'Important'
        },
        {
          id:2,
          content: 'Water plants',
          priority: 'Urgent'
        },
        {
          id:3,
          content: 'Get milk',
          priority: 'Can wait'
        }
    ]

function reducer(state = initialState, action) {
	if (action.type === 'ADD_TODO') {

  		var newTodo = action.payload

    	return [...state, newTodo]

	}else if (action.type === 'DELETE_TODO') {

  		var id = action.payload


  		var filtered = state.filter((todo) => {
	      return todo.id !== id;
	    });

    	return filtered

	}

	else{

  		return state

	}

}

export default reducer;