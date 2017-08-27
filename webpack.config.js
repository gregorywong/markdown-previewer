const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
});
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
      app: './src/index.jsx',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Markdown Previewer',
            /*
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            */
            template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: "./css/[name].css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}