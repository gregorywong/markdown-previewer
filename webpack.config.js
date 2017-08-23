var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
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
        })
    ]
}