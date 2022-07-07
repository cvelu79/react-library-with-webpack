const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PRODUCTION = "production";
const sourcePath = path.resolve(__dirname, "src");

process.env.NODE_ENV = PRODUCTION;

module.exports = {
    mode: PRODUCTION,
    entry: "./src/components/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: pkg.name,
        libraryTarget: "umd"
    },
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
    resolve: {
        modules: ["node_modules", sourcePath],
        extensions: [".js", ".jsx", ".json"],
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|bower_components|build)/,
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
    // resolve: {
    //     alias: {
    //         react: path.resolve("./node_modules/react")
    //     }
    // },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(PRODUCTION)
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            hash: false,
            template: `${sourcePath}/index.html`
        }),
        new MiniCssExtractPlugin({
            filename: "my-react-library.min.css"
        })
     ],
    // externals: {
    //     react: {
    //         root: "React",
    //         commonjs: "react",
    //         commonjs2: "react",
    //         amd: "react"
    //     },
    //     "prop-types": {
    //         root: "PropTypes",
    //         commonjs: "prop-types",
    //         commonjs2: "prop-types",
    //         amd: "prop-types"
    //     }
    // }
};
