var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var ReactDOM = require('react-dom/server');

var Right = React.createFactory(require('../public/js/components/right'));

router.get('/', function(req, res, next) {
	var markup = React.renderToString(Right());

	res.render('index', {
		js: '/js/app.bundle.js',
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
