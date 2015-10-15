import React from 'react';
import ReactDOM from 'react-dom';

if (typeof window !== 'undefined') {
	window.onload = function() {
		var Third = React.createFactory(require('../components/third'));
		ReactDOM.render(Third({ id: context.params.id }), document.getElementById('content-third'));
	};
}
