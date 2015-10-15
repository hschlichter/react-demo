var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var ReactDOM = require('react-dom/server');

var Third = React.createFactory(require('../public/js/components/third'));

router.get('/third', function(req, res, next) {
	var markup = ReactDOM.renderToString(Third());

	res.render('pages/third', {
		title: 'Express',
		markup: markup
	});
});

router.get('/third/:id', function(req, res, next) {
	var context = {
		params: req.params
	};

	var markup = ReactDOM.renderToString(Third({
		id: req.params.id
	}));

	res.render('pages/third', {
		js: '/js/third.bundle.js',
		title: 'Express',
		context: JSON.stringify(context),
		markup: markup
	});
});

module.exports = router;
