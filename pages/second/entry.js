var React = require('react');
var ReactDOM = require('react-dom');

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Second = React.createFactory(require('./components/second'));
		ReactDOM.render(Second(), document.getElementById('content-second'));
	};
}
