import {combineReducers} from 'redux';

import navbarReducer from './navbar-reducer';
import contactReducer from './contact-reducer';

export default combineReducers({navbarReducer, contactReducer});
