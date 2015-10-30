import React, { Component } from 'react';
import Right from './right';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<hr />
				<div id="content-left">
				</div>
				<div id="content-right">
					<Right />
				</div>
			</div>
		);
	}
}
