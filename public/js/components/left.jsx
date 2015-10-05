var React = require('react');

var Left = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Left!</h1>
				<p>Rendered on the client.</p>
			</div>
		);
	}
});

module.exports = Left;
