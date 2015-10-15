var React = require('react');
var ReactDOM = require('react-dom');

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Left = React.createFactory(require('./components/left'));
		ReactDOM.render(Left(), document.getElementById('content-left'));
	};
}
