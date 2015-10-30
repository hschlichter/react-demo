import React, { Component } from 'react';
import HackerNews from './hackernews';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<hr />
				<div id="content">
					<HackerNews />
				</div>
			</div>
		);
	}
}
