var React = require('react');

var Left = React.createClass({
	render: function () {
		return (
			<div>
				<h3>Sub!</h3>
				<p>{this.props.msg}</p>
			</div>
		);
	}
});

module.exports = Left;
