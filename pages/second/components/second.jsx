var React = require('react');

var Second = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Second component</h1>
				<p>Rendered on the client.</p>
			</div>
		);
	}
});

module.exports = Second;
