var express = require('express');
var router = express.Router();

router.get('/second', function(req, res, next) {
	var context = {};

	res.render('second/views/main', {
		js: '/js/second.bundle.js',
		context: JSON.stringify(context),
		title: 'Express'
	});
});

module.exports = router;
