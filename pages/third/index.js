var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var ReactDOM = require('react-dom/server');

var Third = React.createFactory(require('./components/third'));

router.get('/third', function(req, res, next) {
	var context = {};
	var markup = ReactDOM.renderToString(Third());

	res.render('third/views/main', {
		js: '/js/third.bundle.js',
		context: JSON.stringify(context),
		title: 'Express',
		markup: markup
	});
});

router.get('/third/:id', function(req, res, next) {
	var context = {
		params: req.params
	};

	var markup = ReactDOM.renderToString(Third({
		id: context.params.id
	}));

	res.render('third/views/main', {
		js: '/js/third.bundle.js',
		context: JSON.stringify(context),
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
