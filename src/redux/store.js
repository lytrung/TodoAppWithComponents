import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import todosReducer from './todosReducer' //Access to the reducers
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'



var rootReducer = combineReducers({
	todos : todosReducer,
	user: userReducer,
	loading: loadingReducer,
})
//Create the store
var store = createStore(rootReducer,applyMiddleware(thunk))



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

