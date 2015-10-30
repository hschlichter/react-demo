import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../store/configurestore';
import Layout from './components/layout';
import { receive } from './actions/hackernews';
import reducers from './reducers';
import superagent from 'superagent';

let router = express.Router();

router.get('/hackernews', function(req, res, next) {
	const store = configureStore(reducers);

	superagent
		.get('https://www.kimonolabs.com/api/c30pdwri')
		.end((err, res2) => {
			if (res2.ok) {
				store.dispatch(receive(res2.body.results.collection1));
			}

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
