var React = require('react');
var Sub = require('./sub.jsx');
var CountButton = require('./countbutton.jsx');

var Left = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Left!</h1>
				<p>Rendered on the client.</p>
				<Sub msg="hello" />
				<CountButton />
			</div>
		);
	}
});

module.exports = Left;
