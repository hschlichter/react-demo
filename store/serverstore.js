import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(reducers, initialState = {}) {
	return applyMiddleware(
		thunkMiddleware
	)(createStore)(reducers, initialState);
}
