'use strict';

import superagent from 'superagent';
import { receive } from '../actions/hackernews';

export function fetchTop30() {
	return new Promise((resolve, reject) => {
		superagent
			.get('https://www.kimonolabs.com/api/c30pdwri')
			.end((err, res) => {
				if (res.ok) {
					resolve(res.body.results.collection1);
				} else {
					reject();
				}
			});
	});
}
