var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var entry = {
	vendor: ['react', 'react-dom']
};

var basePath = path.join(__dirname, 'pages');
var dirs = fs.readdirSync(basePath)
	.filter((file) => {
		return fs.statSync(path.join(basePath, file)).isDirectory();
	});

dirs.forEach((dir) => {
	entry[dir] = './pages/' + dir + '/entry.js';
});

module.exports = [{
	context: __dirname,
	entry: entry,
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
				test: /\.jsx$/,
				loaders: ['babel-loader']
			}
		]
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin({
		//	output: {
		//		comments: false
		//	},
		//	sourceMap: true,
		//	mangle: false
		//}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [__dirname],
		modulesDirectories: ['node_modules']
	}
}];
