import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/countbutton';

export default class CountButton extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<button onClick={this.props.handleClick}>
				Click count: {this.props.count}
			</button>
		);
	}
}
