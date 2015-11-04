import fs from 'fs';
import path from 'path';

let dirs = fs.readdirSync(__dirname)
	.filter((file) => {
		return fs.statSync(path.join(__dirname, file)).isDirectory();
	});

export default dirs.reduce((prev, cur) => {
	prev.push(require(path.join(__dirname, cur) + '/'));
	return prev;
}, []);
