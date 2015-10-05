var express = require('express');
var router = express.Router();

/* GET second listing. */
router.get('/second', function(req, res, next) {
	res.render('second', {
		title: 'Express'
	});
});

module.exports = router;
