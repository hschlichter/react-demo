import { INCREMENT } from '../actions/countbutton.js';

const initialState = {
	count: []
};

export default function countbutton(state = initialState, action = {}) {
	switch (action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				count: state.count + 1
			});
		default:
			return state;
	}
}
