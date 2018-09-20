const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sourcePath = path.join(__dirname, 'src')
const staticSourcePath = path.join(__dirname, 'static')

module.exports = {
    entry: path.resolve(sourcePath, 'index.js'),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(sourcePath, 'index.html')
        })
    ],
    resolve: {
        alias: {
            '../../theme.config$': path.resolve(staticSourcePath, 'semantic-ui', 'theme.config')
        }
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' },
            {
                test: /\.js$/,
                include: sourcePath,
                use: [ 'babel-loader' ]
            }
        ]
    }
}