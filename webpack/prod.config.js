/**
 * Webpack production config file to create bundle
 */

const path = require('path');
const pkg = require("../package.json");
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./base.config');

const PRODUCTION = "production";
const sourcePath = path.resolve(__dirname, '../', "src");
const outputPath = path.resolve(__dirname, '../', 'dist');

module.exports = merge(baseConfig, {
	mode: PRODUCTION,
	entry: "./src/components/index.js",

    output: {
        path: outputPath,
        filename: "index.js",
        library: pkg.name,
        libraryTarget: "umd"
    },

	resolve: {
        modules: ["node_modules", sourcePath],
        extensions: [".js", ".jsx", ".json"],
        enforceExtension: false
    },

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},

	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|build)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }
            }
        ]
    },
	
	plugins: [],

	externals: {
        react: {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react"
        },
        "prop-types": {
            root: "PropTypes",
            commonjs: "prop-types",
            commonjs2: "prop-types",
            amd: "prop-types"
        }
    }
});
