var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var Third = React.createFactory(require('../public/js/components/third'));

router.get('/third', function(req, res, next) {
	var markup = React.renderToString(Third());

	res.render('third', {
		title: 'Express',
		markup: markup
	});
});

router.get('/third/:id', function(req, res, next) {
	var markup = React.renderToString(Third({
		id: req.params.id
	}));

	res.render('third', {
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
