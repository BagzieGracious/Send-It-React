import { combineReducers } from 'redux';
import authReducer from './authReducers';
import parcelReducer from './parcelReducers';
const loading = { loading: false };
export default combineReducers({ authReducer, parcelReducer });
