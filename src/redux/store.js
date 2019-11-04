import {createStore,combineReducers} from 'redux'
import todosReducer from './todosReducer' //Access to the reducers
import userReducer from './userReducer'


var rootReducer = combineReducers({
	todos : todosReducer,
	user: userReducer
})
//Create the store
var store = createStore(rootReducer)



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

