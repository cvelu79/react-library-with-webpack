/**
 * Webpack development config file to create bundle
 */

const path = require('path');
const { merge } = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const postCssPresetEnv = require('postcss-preset-env');
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
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'styleTag',
						},
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									postCssPresetEnv(),
									autoprefixer({
										cascade: false,
									}),
								],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
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
			}
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
