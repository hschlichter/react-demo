var React = require('react');
var ReactDOM = require('react-dom');

if (typeof window !== 'undefined') {
	window.onload = function() {
		var HNT10 = React.createFactory(require('./components/hnt10'));
		ReactDOM.render(HNT10(), document.getElementById('content-hnt10'));
	};
}
