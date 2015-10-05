var path = require('path');
var webpack = require('webpack');

module.exports = [{
	context: path.join(__dirname, 'public', 'js'),
	entry: {
		app: './pages/app.js',
		second: './pages/second.js',
		third: './pages/third.js',
		vendor: ['react']
	},
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader?harmony'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			sourceMap: false,
			mangle: false
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [path.join(__dirname, 'public', 'js')],
		modulesDirectories: ['node_modules']
	}
}];
