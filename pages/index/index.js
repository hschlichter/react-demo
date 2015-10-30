import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../store/serverstore';
import reducers from './reducers';
import Layout from './components/layout';

let router = express.Router();

router.get('/', function(req, res, next) {
	const store = configureStore(reducers);

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
		bundle: '/js/index.bundle.js',
		main: main,
		header: '',
		footer: ''
	});
});

module.exports = router;
