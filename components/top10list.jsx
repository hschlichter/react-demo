import React, { Component } from 'react';
import superagent from 'superagent';
import Top10Item from './top10item';

export default class Top10List extends Component {
	render() {
		var items = this.props.items.slice(0, 10).map((item) => {
			return (
				<Top10Item key={item.index} title={item.title.text} />
			);
		});

		return (
			<div>
				<h1>Top 10</h1>
				<h3>{this.props.title}</h3>
				{items}
			</div>
		);
	}
}
