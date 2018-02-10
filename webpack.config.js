const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: "./app/src/ApplicationRunner.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "Subground - A Dungeon Crawler"
        }),
        new CopyWebpackPlugin([
            { from: "./**/static/**/*.css", to: "./" }
        ], {})
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist',
        port: 7331,
        hot: true
    }
};