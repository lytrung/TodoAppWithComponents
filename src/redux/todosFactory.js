

import {getTodos,addTodos,deleteTodos} from '../API';


var getTodosAction = () => {
  return dispatch => {

      console.log(getTodos)
      getTodos()
      .then(res => {


        var action = {
          type:'SET_TODOS',
          payload:res.data
        }
        dispatch(action);
      })

  };
};

var createTodosAction = (data) => {
  return dispatch => {
      addTodos(data)
      .then(res => {


        // var action = {
        //   type:'ADD_TODO',
        //   payload:res.data
        // }
        // dispatch(action);

        dispatch(getTodosAction());
      })

  };
};


var deleteTodosAction = (id) => {
  return dispatch => {
      deleteTodos(id)
      .then(res => {


        // var action = {
        //   type:'ADD_TODO',
        //   payload:res.data
        // }
        // dispatch(action);

        dispatch(getTodosAction());
      })

  };
};

export {getTodosAction,createTodosAction,deleteTodosAction};


// export const addTodo = ({ title, userId }) => {
//   return dispatch => {
//     dispatch(addTodoStarted());

//     axios
//       .post(`https://jsonplaceholder.typicode.com/todos`, {
//         title,
//         userId,
//         completed: false
//       })
//       .then(res => {
//         dispatch(addTodoSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(addTodoFailure(err.message));
//       });
//   };
// };

// const addTodoSuccess = todo => ({
//   type: ADD_TODO_SUCCESS,
//   payload: {
//     ...todo
//   }
// });

// const addTodoStarted = () => ({
//   type: ADD_TODO_STARTED
// });

// const addTodoFailure = error => ({
//   type: ADD_TODO_FAILURE,
//   payload: {
//     error
//   }
// });