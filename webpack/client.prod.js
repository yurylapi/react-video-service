const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StatsWebpackPlugin = require('stats-webpack-plugin');
const { join } = require('path');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    name: 'client',
    target: 'web',
    devtool: 'hidden-source-map',
    entry: [join(__dirname, '../src/client/index')],
    output: {
        filename: 'app.client.js',
        chunkFilename: '[name].chunk.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                extractComments: function (astNode, comment) {
                    return !!/@extract/i.test(comment.value);
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: {
            name: 'bootstrap'
        },
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    ExtractCssChunksPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            localsConvention: 'camelCase'
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
        new ExtractCssChunksPlugin({
            filename: '[name].[contenthash:4].css',
            chunkFilename: '[name].[contenthash:4].css'
        }),
        new StatsWebpackPlugin('stats.json')
    ]
});
