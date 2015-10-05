var React = require('react');

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Left = React.createFactory(require('../components/left'));
		React.render(Left(), document.getElementById('content-left'));
	};
}
