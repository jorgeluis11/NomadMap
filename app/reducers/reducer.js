import update from 'react-addons-update';
import newId from '../utils/newid';


function getId(state){
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1
}

export default function reducer(state, action) {
	switch(action.type){
		case "LOADING":
			return Object.assign({}, state, ...state.list, {
				loading:!state.loading
				});
		case "ADD_LIST":
			action.tweet.uniqueID = newId();
			action.tweet.hover = false;
			// console.log(action.tweet.uniqueID)
			return Object.assign({
					list:[...state.list,action.tweet],
					loading:false
				});
		case "HOVER_TWEET":
			// state.list.findIndex(m => m.get('id') === markerId);
			// console.log("state",state);
			// console.log("id",action.id)
			// console.log(state.list)
			// console.log(action)
			var index = state.list.findIndex(m => m.uniqueID == action.id);
			// console.log("index",index);
			state.list[index].hover = action.hover;
			return Object.assign({
					list:[...state.list]
				});
		case "SELECT_FIRST":
			var index = state.list.findIndex(m => m.uniqueID == action.id);

			return Object.assign({
					first:state.list[index],
					second:state.second,
					list:[...state.list]
				});
		case "SELECT_SECOND":
			var index = state.list.findIndex(m => m.uniqueID == action.id);

			return Object.assign({
					first:state.first,
					second:state.list[index],
					list:[...state.list]

				});
		case "NOMAD_LIST":

			action.result.map((country)=>{
				country.uniqueID = newId();
				country.hover = false;
			})
			return Object.assign({
					list:action.result,
					loading:false
				});

		// case "Toggle_Groupon":
		// 	state.grouponList.map(toggle=>{
		// 		toggle.active = false;
		// 	});
		// 	state.grouponList[action.id].active = !state.grouponList[action.id].active;
		// 	return Object.assign({}, state, ...state.grouponList, {
		// 		grouponList:[...state.grouponList]
		// 		});
		default:
			return state;
	}

}
