var React = require('react');

var CountButton = React.createClass({
	getInitialState: function () {
		return {
			count: 0
		};
	},
	handleClick: function (event) {
		this.setState({
			count: this.state.count + 1
		});
	},
	render: function () {
		return (
			<button onClick={this.handleClick}>
				Click count: {this.state.count}
			</button>
		);
	}
});

module.exports = CountButton;
