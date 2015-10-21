import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/countbutton';

export default class CountButton extends Component {
	handleClick(event) {
		this.props.handleClick(event);
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				Click count: {this.props.count}
			</button>
		);
	}
}
