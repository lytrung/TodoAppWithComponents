// var setUserAction = {
// 	type:'SET_USER',
// 	payload:{
// 		id:1,
// 		username: 'peter.pan'
// 	}
// }

// var unsetUserAction = {
// 	type:'UNSET_USER'
// }

var initialState = false
//Create userReducer - IMMUTABLE
function loadingReducer(state = initialState,action){

	if(action.type == 'SET_LOADING'){

		return action.payload

	}else{
		//do nothing
		return state
	}
}
export default loadingReducer













