/**
 * Webpack development config file to create bundle
 */

const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base.config');

const sourcePath = path.resolve(__dirname, '../', 'src');

module.exports = merge(baseConfig, {
	mode: 'development',

	devtool: 'cheap-module-source-map',

	devServer: {
		static: {
			directory: sourcePath,
		},
		port: '3001',
		historyApiFallback: true,
		open: true,
		hot: true,
		liveReload: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			hash: false,
			template: `${sourcePath}/index.html`,
		}),
	],
});
