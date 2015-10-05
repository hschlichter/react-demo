var React = require('react');

var Third = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Third component</h1>
				<p>Rendered on the server.</p>
			</div>
		);
	}
});

module.exports = Third;
