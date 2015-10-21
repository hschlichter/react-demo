import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../store/configurestore';
import HackerNews from './components/hackernews';

let router = express.Router();

router.get('/hackernews', function(req, res, next) {
	const store = configureStore();

	let markup = ReactDOM.renderToString(
		<Provider store={store}>
			<HackerNews />
		</Provider>
	);

	let context = {
		params: req.params,
		state: store.getState()
	};

	res.render('hackernews/views/main', {
		js: '/js/hackernews.bundle.js',
		context: JSON.stringify(context),
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
