var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var ReactDOM = require('react-dom/server');

var HNT10 = React.createFactory(require('./components/hnt10'));

router.get('/hnt10', function(req, res, next) {
	var context = {};
	var markup = ReactDOM.renderToString(HNT10());

	res.render('hnt10/views/main', {
		js: '/js/hnt10.bundle.js',
		context: JSON.stringify(context),
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
