import modal from './modal.js';
import data from './data.js';
// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';

const rootReducer = combineReducers({
	data,
	modal
})

export default rootReducer;