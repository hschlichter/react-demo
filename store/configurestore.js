import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

export default function configureStore(initialState) {
	//const loggerMiddleware = createLogger();

	return applyMiddleware(
		thunkMiddleware
		//loggerMiddleware
	)(createStore)(reducers, initialState);
}
