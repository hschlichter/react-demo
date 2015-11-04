import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../shared/store/serverstore';
import Layout from './components/layout';
import { receive } from './actions/hackernews';
import reducers from './reducers';
import { fetchTop30 } from './sideeffects/hackernews';

let router = express.Router();

router.get('/hackernews', function(req, res, next) {
	const store = configureStore(reducers);

	fetchTop30().then((json) => {
		store.dispatch(receive(json));

		let main = ReactDOM.renderToString(
			<Provider store={store}>
				<Layout />
			</Provider>
		);

		let context = {
			params: req.params,
			state: store.getState()
		};

		res.render('basetemplate', {
			title: 'Express',
			context: JSON.stringify(context),
			bundle: '/js/hackernews.bundle.js',
			main: main,
			header: '',
			footer: ''
		});
	});
});

module.exports = router;
