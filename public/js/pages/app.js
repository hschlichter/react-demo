import {
	React,
	ReactDOM
} from 'react';

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Left = React.createFactory(require('../components/left'));
		ReactDOM.render(Left(), document.getElementById('content-left'));
	};
}
