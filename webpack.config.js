const path = require("path");
const pkg = require("./package.json");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.[chunkhash].js",
        library: pkg.name,
        libraryTarget: "commonjs2"
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, "src")],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            react: path.resolve("./node_modules/react")
        },
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
