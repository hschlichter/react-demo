var express = require('express');
var router = express.Router();

require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React = require('react');
var Right = React.createFactory(require('../public/js/components/right'));

/* GET home page. */
router.get('/', function(req, res, next) {
	var markup = React.renderToString(Right());

	res.render('index', {
		title: 'Express',
		markup: markup
	});
});

module.exports = router;
