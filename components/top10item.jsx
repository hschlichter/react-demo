import React, { Component } from 'react';

export default class Top10Item extends Component {
	render() {
		return (
			<div>
				<span>{this.props.rank} {this.props.title}</span>
			</div>
		);
	}
}
