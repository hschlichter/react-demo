import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../store/configurestore';
import Right from './components/right';

let router = express.Router();

router.get('/', function(req, res, next) {
	const store = configureStore();

	let markup = ReactDOM.renderToString(
		<Provider store={store}>
			<Right />
		</Provider>
	);

	let context = {
		params: req.params,
		state: store.getState()
	};

	res.render('index/views/main', {
		js: '/js/index.bundle.js',
		context: JSON.stringify(context),
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
