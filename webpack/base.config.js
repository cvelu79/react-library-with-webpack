/**
 * Webpack base config file to create bundle
 */

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const sourcePath = path.resolve(__dirname, '../', 'src');

module.exports = {
	entry: `${sourcePath}/index.js`,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},

	plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
};
