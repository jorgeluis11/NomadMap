import fetch from 'isomorphic-fetch'
import ReduxThunk from 'redux-thunk'

let actions = {
		// },
        // toggleGroupon: function(id){
        //     return {
        //         type:"Toggle_Groupon",
        //         id
        //     }
        // },

				addList: function(tweet){
            return {
                type:"ADD_LIST",
                tweet
            }
        },
        loading: function(){
            return {
                type:"LOADING",
            }
        },
        hoverTweet: function(id, hover){
            return {
                type:"HOVER_TWEET",
								id,
								hover
            }
        },
        selectFirst: function(id){
            return {
                type:"SELECT_FIRST",
								id
            }
        },
        selectSecond: function(id){
            return {
                type:"SELECT_SECOND",
								id
            }
        },
				nomadList: function() {
		        return async function(dispatch) {
		            var response = await fetch("http://localhost:3000/NomadList")
									.then((response) => {
										// console.log(response);
								     return response.json();
								 });
								// console.log(response);

		            //

		            dispatch({
		                    type: "NOMAD_LIST",
		                    result: response,
		            })
		            // return response
		        }
		    },
				getToggledList: function(list) {
	        return async function(dispatch) {
	            const response = await fetch(`http://localhost:3000/NomadList`)
	            .then((response) => {
									// console.log(response.json());
	                return response.json();
	            });

	            Promise.all([

	                dispatch({
	                    type: "GET_LIST",
	                    result: response.items})
	                ])

	        }
				}

	}




// let getData = function() {
//     //The thunk is also passed the state as a second parameter, but it's not
//     //needed very frequently.
//     return async function(dispatch) {
//         //These actions use the meta property to denote what they are doing.
//         //Another solution is to use separate action types.
//         // dispatch({
//         //     type: "GET_LIST",
//         //     meta: 'request',
//         // });
//         //Normally, you'd have an ajax call, or some other asynchronous action
//         //beside a setTimeout.
//         var response = await fetch(`https://notaso.com/api/v2/professors/?format=json`)
//       	.then((response) => {
//       		  dispatch({
//                 type: "GET_LIST",
//                 todo: response.json().results(),
//             });
//         })

//     }
// };



export default actions;
