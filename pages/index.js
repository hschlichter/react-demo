var fs = require('fs');
var path = require('path');

var dirs = fs.readdirSync(__dirname)
	.filter((file) => {
		return fs.statSync(path.join(__dirname, file)).isDirectory();
	});

var routers = dirs.reduce((prev, cur) => {
	prev.push(require(path.join(__dirname, cur) + '/'));
	return prev;
}, []);

module.exports = routers;
