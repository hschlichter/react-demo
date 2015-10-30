import superagent from 'superagent';

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
			superagent
				.get('https://www.kimonolabs.com/api/c30pdwri')
				.end((err, res) => {
					if (res.ok) {
						dispatch(receive(res.body.results.collection1));
					}
				});
		}
	};
}
