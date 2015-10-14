var React = require('react');
var Sub = require('./sub.jsx');
var CountButton = require('./countbutton.jsx');

var Third = React.createClass({
	render: function () {
		var id = undefined;
		if (this.props.id) {
			id = <p>{this.props.id}</p>;
		}

		return (
			<div>
				<h1>Third component</h1>
				<p>Rendered on the server.</p>
				{id}
				<Sub msg={'id : ' + this.props.id} />
				<CountButton />
			</div>
		);
	}
});

module.exports = Third;
