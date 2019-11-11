import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import todosReducer from './todosReducer' //Access to the reducers
import userReducer from './userReducer'


import todosFactory from './todosFactory' 

var rootReducer = combineReducers({
	todos : todosReducer,
	user: userReducer
})
//Create the store
var store = createStore(rootReducer,applyMiddleware(thunk))

// var todos = [
// 	{
//       id:1,
//       content: 'Ring Peter',
//       priority: 'Important'
//     },
//     {
//       id:2,
//       content: 'Water plants',
//       priority: 'Urgent'
//     },
//     {
//       id:3,
//       content: 'Get milk',
//       priority: 'Can wait'
//     }
// ]
// store.dispatch(todosFactory.set(todos))

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


// var action4 = {
// 	type:'SET_USER',
// 	payload:{
// 		id:1,
// 		username: 'peter.pan'
// 	}
// }

// store.dispatch(action4)


// var action5 = {
// 	type:'UNSET_USER'
// }

// store.dispatch(action5)


// console.log(store.getState())

export default store

