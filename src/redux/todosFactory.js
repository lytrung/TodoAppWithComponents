import api from '../API';


var todoFactory = {
	getTodosAction : () => {
	  return dispatch => {



	    dispatch({type:'SET_LOADING',payload:true})

	    api.getTodos()
	      .then(res => {
	        var action = {
	          type:'SET_TODOS',
	          payload:res.data
	        }
	        dispatch(action);
	        dispatch({type:'SET_LOADING',payload:false})
	     })

	  };
	},

	createTodosAction : (data) => {

	  return dispatch => {
	  		dispatch({type:'SET_LOADING',payload:true})
	      api.addTodos(data)
	      .then(res => {


	        // var action = {
	        //   type:'ADD_TODO',
	        //   payload:res.data
	        // }
	        // dispatch(action);

	        dispatch(todoFactory.getTodosAction());
	        dispatch({type:'SET_LOADING',payload:false})
	      })

	  };
	},


	deleteTodosAction : (id) => {

		
	  return dispatch => {
	  		dispatch({type:'SET_LOADING',payload:true})
	      api.deleteTodos(id)
	      .then(res => {


	        // var action = {
	        //   type:'ADD_TODO',
	        //   payload:res.data
	        // }
	        // dispatch(action);

	        dispatch(todoFactory.getTodosAction());

	        dispatch({type:'SET_LOADING',payload:false})
	      })

	  };
	},
}

export default todoFactory;

