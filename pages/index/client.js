import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configurestore';
import Left from './components/left';

const store = configureStore(context.state);

if (typeof window !== 'undefined') {
	window.onload = function() {
		ReactDOM.render(
			<Provider store={store}>
				<Left />
			</Provider>,
			document.getElementById('content-left')
		);
	};
}
