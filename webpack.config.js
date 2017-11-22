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
var webpack = require('webpack')
var path = require('path')

// Exports
module.exports = {
    entry: './ui/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build/ui')
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
            }
        ]
    }
}
