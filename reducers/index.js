import { combineReducers } from 'redux';
import hackernews from './hackernews';
import countbutton from './countbutton';

const reducers = combineReducers({
	hackernews,
	countbutton
});

export default reducers;
