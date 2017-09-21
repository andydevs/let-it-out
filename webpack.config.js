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
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
