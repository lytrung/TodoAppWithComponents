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

var initialState = null
//Create userReducer - IMMUTABLE
function userReducer(state = initialState,action){

	if(action.type == 'SET_USER'){

		return action.payload

	}else if (action.type == 'UNSET_USER'){
	
		return null

	}else{
		//do nothing
		return state
	}
}
export default userReducer













