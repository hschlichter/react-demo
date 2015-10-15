var React = require('react');
var ReactDOM = require('react-dom');

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Third = React.createFactory(require('./components/third'));

		if ('params' in context) {
			ReactDOM.render(Third({ id: context.params.id }), document.getElementById('content-third'));
		} else {
			ReactDOM.render(Third(), document.getElementById('content-third'));
		}
	};
}
