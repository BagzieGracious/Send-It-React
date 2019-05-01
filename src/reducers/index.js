import { combineReducers } from 'redux';
import authReducer from './authReducers';
import parcelReducer from './parcelReducers';
export default combineReducers({ authReducer, parcelReducer });
