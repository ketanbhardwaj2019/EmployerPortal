import { combineReducers } from 'redux';
import  { reducer as reducFormReducers } from 'redux-form';
import config from './config';

const rootReducer = combineReducers({
    config,
});

export default rootReducer;

