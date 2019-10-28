import {createStore} from 'redux'
import todosReducer from './todosReducer' //Access to the reducers

//Create the store
var store = createStore(todosReducer)
// var action1 = {
// 	type:'ADD_TODO',
// 	payload:{
// 		id:4,
// 		content:'study react',
// 		priority: 'high'
// 	}
// }
// store.dispatch(action1)

// var action2 = {
// 	type:'REMOVE_TODO',
// 	payload:2
// }
// store.dispatch(action2)


// var action3 = {
// 	type:'ADD_TODO',
// 	payload:{
// 		id:6,
// 		content:'testing react',
// 		priority: 'high'
// 	}
// }
// store.dispatch(action3)

// console.log(store.getState())

export default store

