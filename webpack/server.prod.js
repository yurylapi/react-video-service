const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { join } = require('path');
const common = require('./common.js');
const nodeExternals = require('../scripts/node-externals');

module.exports = merge(common, {
    mode: 'production',
    name: 'server',
    target: 'node',
    devtool: 'hidden-source-map',
    externals: nodeExternals,
    entry: ['@babel/polyfill', join(__dirname, '../src/server/index')],
    output: {
        filename: 'app.server.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                extractComments: function (astNode, comment) {
                    return !!/@extract/i.test(comment.value);
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            localsConvention: 'camelCase',
                            onlyLocals: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
});
