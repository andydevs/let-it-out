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
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const project = require('./package.json')

// Environment variable
const ENV = process.env.BUILD_ENV || 'development'

// Exports
module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath: (ENV === 'production' ? `/${project.name}/` : '/')
    },
    module: {
        rules: [
            { test: /.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /.scss$/, use: ['style-loader','css-loader','sass-loader'] },
            { test: /.svg$/, use: 'url-loader' },
            { test: /.html$/, use: 'html-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template:'app/resources/html/index.html'
        })
    ]
}
