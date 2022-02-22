import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import messagesReducer from './messages/messages';

const reducers = combineReducers({ messages: messagesReducer });
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
