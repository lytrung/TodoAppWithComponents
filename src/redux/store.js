import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";


const store = createStore(
  reducer
);

// var action = {
// 	type: 'ADD_TODO',
//   	payload: {
//   			id: Date.now(),
// 			content: 'test 1',
// 			priority: 'important'
// 		}
// }
// store.dispatch(action)


// var action2 = {
// 	type: 'DELETE_TODO',
//   	payload: 2
// }
// store.dispatch(action2)

// console.log(store.getState())

export default store;