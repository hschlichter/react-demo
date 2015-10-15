var express = require('express');
var router = express.Router();

router.get('/second', function(req, res, next) {
	res.render('second', {
		js: '/js/second.bundle.js',
		title: 'Express'
	});
});

module.exports = router;
