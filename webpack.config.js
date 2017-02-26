/**
 * Created by lejoss on 7/5/16.
 */

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: __dirname + '/app/index.html'
});

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [path.resolve('./app/')]
	},
	entry: './app/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	devServer: {
		inline: true,
		port: 5555
	},
	eslint: {
		configFile: './config.eslint.json'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react', 'stage-3']
			}
		}, {
			test: /(\.js|.jsx)$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},
	plugins: [HtmlWebpackPluginConfig]
};