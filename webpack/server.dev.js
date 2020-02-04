const webpack = require('webpack');
const merge = require('webpack-merge');
const { join } = require('path');
const common = require('./common.js');
const nodeExternals = require('../scripts/node-externals');

module.exports = merge(common, {
    mode: 'development',
    name: 'server',
    target: 'node',
    externals: nodeExternals,
    devtool: 'inline-source-map',
    entry: ['@babel/polyfill', join(__dirname, '../src/server/index')],
    output: {
        filename: 'app.server.js',
        libraryTarget: 'commonjs2'
    },
    devServer: {
        contentBase: './public'
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
                                localIdentName: '[name]__[local]'
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
