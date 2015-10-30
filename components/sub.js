import React, { Component } from 'react';

export default class Sub extends Component {
	render() {
		return (
			<div>
				<h3>Sub!</h3>
				<p>{this.props.msg}</p>
			</div>
		);
	}
}
