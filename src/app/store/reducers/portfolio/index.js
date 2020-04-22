import {combineReducers} from 'redux';
import navbar from './navbar.reducer';

const portfolioReducers = combineReducers({
    navbar
});

export default portfolioReducers;
