var React = require('react');

var CountButton = React.createClass({
	getInitialState: function () {
		return {
			count: 0
		};
	},
	handleClick: function (event) {
		console.log('clicked');
		this.setState({
			count: this.state.count + 1
		});
	},
	componentDidMount: function () {
		console.log('did mount');
	},
	componentWillUnmount: function () {
		console.log('unmount');
	},
	componentWillMount: function () {
		console.log('will mount');
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
