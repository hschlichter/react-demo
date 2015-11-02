import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/clientstore';
import reducers from './reducers';
import HackerNews from './components/hackernews';

const store = configureStore(reducers, context.state);

if (typeof window !== 'undefined') {
	window.onload = function() {
		ReactDOM.render(
			<Provider store={store}>
				<HackerNews />
			</Provider>,
			document.getElementById('content')
		);
	};
}
