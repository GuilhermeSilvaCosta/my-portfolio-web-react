import {combineReducers} from 'redux';
import portfolio from './portfolio';

const createReducer = (asyncReducers) =>
    combineReducers({
        portfolio,
        ...asyncReducers
    });

export default createReducer;
