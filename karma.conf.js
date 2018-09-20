const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sourcePath = path.join(__dirname, 'src')
const testPath = path.join(__dirname, 'test')
const staticSourcePath = path.join(__dirname, 'static')

module.exports = (config) => {
    config.set({
        browsers: [ 'Chrome' ],
        frameworks: [ 'mocha' ],
        files: [ 'webpack.test.js' ],
        plugins: [ 'karma-chrome-launcher', 'karma-mocha', 'karma-webpack' ],
        preprocessors: {
            'webpack.test.js': [ 'webpack' ]
        },
        webpack: {
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
                        include: [ sourcePath, testPath ],
                        use: [ 'babel-loader' ]
                    },
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[path][name].[ext]'
                                }
                            }
                        ]
                    }
                ]
            },
            devtool: 'inline-source-map'
        }
    })
}