import { RECEIVE } from '../actions/hackernews';

const initialState = {
	items: []
};

export default function hackernews(state = initialState, action = {}) {
	switch (action.type) {
		case RECEIVE:
			return Object.assign({}, state, {
				items: action.json
			});
		default:
			return state;
	}
}
