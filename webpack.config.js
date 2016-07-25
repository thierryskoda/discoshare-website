var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer      = require('autoprefixer');
var webpack           = require('webpack');

const OUTPUT_DIR = path.join(__dirname, 'build');

module.exports = {
	entry: {
		'main': path.join(__dirname, 'app', 'js', 'index.js'),
		'style': path.join(__dirname, 'app', 'css', 'style.scss')
	},
	output: {
		path: OUTPUT_DIR,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, plugins: ['transform-runtime']},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.html$/, loader: 'html-loader'},
      		{ test: /\.png$/, loader: 'file', include: path.join(__dirname, 'app', 'assets', 'images', '1x') },
      		// { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file', include: path.join(__dirname, 'app', 'assets', 'fonts')},
      		{ test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			  	loader: 'url',
			  	query: {
			    	limit: 50000,
			    	mimetype: 'application/font-woff',
			    	name: './app/assets/fonts/[hash].[ext]'
			  	},
			  	include: path.join(__dirname, 'app', 'assets', 'font')
			}
		]
	},
	preLoaders : [{
		test: /\.jsx?$/,
		loader: "eslint-loader",
		exclude: /node_modules/
	}],
	plugins: [
		new ExtractTextPlugin('[name].css'),
	],
	postcss: function () {
		return [autoprefixer];
	},
	devServer: {
		host: 'localhost',
		port: '8080'
	}
};
