import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers/reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';


let finalCreateStore = compose(
	applyMiddleware(logger(), thunk)
	// applyMiddleware( thunk)

)(createStore)

let initialState =  {
		first:undefined,
		second:undefined,
    list:[],
    loading:false
}


export default function configureStore(){
	 return finalCreateStore(reducer, initialState);
	 // return createStore(reducer, initialState);
}
