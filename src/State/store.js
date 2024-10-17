import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {tableReducer} from './reducer/tableReducer';

export const store = legacy_createStore(tableReducer, applyMiddleware(thunk));
