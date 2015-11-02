import { fetchTop30 } from '../sideeffects/hackernews';

export const RECEIVE = 'HACKERNEWS_RECEIVE';

export function receive(json) {
	return {
		type: RECEIVE,
		json
	}
}

export function fetch() {
	return (dispatch, getState) => {
		const state = getState();
		if (state.hackernews.items.length === 0) {
			fetchTop30().then((json) => {
				dispatch(receive(json));
			});
		}
	};
}
