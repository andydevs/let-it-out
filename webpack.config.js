/**
 * Let It Out
 *
 * A UI where you can write your words down and watch them fade away,
 * dissappearing from your mind.
 *
 * Author:  Anshul Kharbanda
 * Created: 9 - 21 - 2017
 */
// Imports
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

// Production environment
var ENV = process.env.NODE_ENV || 'development'

// Exports
module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.svg$/,
                loader: 'url-loader'
            },
            {
                test: /.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template:'app/resources/html/' + ENV + '.index.html',
            chunks: []
        })
    ]
}
