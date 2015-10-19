var React = require('react');

var Top10Item = React.createClass({
	render() {
		return (
			<div>
				<span>{this.props.rank} {this.props.title}</span>
			</div>
		);
	}
});

module.exports = Top10Item;
