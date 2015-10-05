var React = require('react');

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Second = React.createFactory(require('../components/second'));
		React.render(Second(), document.getElementById('content-second'));
	};
}
