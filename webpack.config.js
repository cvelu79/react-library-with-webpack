const path = require("path");
const webpack = require('webpack');
const pkg = require("./package.json");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PRODUCTION = 'production';

process.env.NODE_ENV = PRODUCTION;

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.[chunkhash].js",
        library: pkg.name,
        libraryTarget: "commonjs2"
    },
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "src")],
        extensions: [".js", ".jsx", ".json"],
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
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
            'process.env.NODE_ENV': JSON.stringify(PRODUCTION)
          }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/my-react-library.min.css"
        })
    ],
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
};
