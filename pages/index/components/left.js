import React, { Component } from 'react';
import Sub from '../../../components/sub';
import CountButton from '../../../components/countbutton';

export default class Left extends Component {
	render() {
		return (
			<div>
				<h1>Left!</h1>
				<p>Rendered on the client.</p>
				<Sub msg="hello" />
			</div>
		);
	}
}
