const webpack = require('webpack');
const merge = require('webpack-merge');
const PrettierPlugin = require('prettier-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');
const { join } = require('path');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'development',
    name: 'client',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    entry: [
        'webpack-hot-middleware/client',
        join(__dirname, '../src/client/index')
    ],
    output: {
        filename: 'app.client.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: ExtractCssChunksPlugin.loader,
                        options: {
                            hot: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            modules: {
                                localIdentName: '[name]__[local]'
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
    optimization: {
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
    plugins: [
        new PrettierPlugin(),
        new SassLintPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractCssChunksPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ]
});
