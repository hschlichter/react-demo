var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var ReactDOM = require('react-dom/server');

var Right = React.createFactory(require('./components/right'));

router.get('/', function(req, res, next) {
	var context = {};
	var markup = ReactDOM.renderToString(Right());

	res.render('index/views/main', {
		js: '/js/index.bundle.js',
		context: JSON.stringify(context),
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
