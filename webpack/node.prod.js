const merge = require('webpack-merge');
const { join } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const extendedNodeExternals = require('../scripts/extended-node-externals');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    target: 'node',
    externals: extendedNodeExternals,
    node: {
        __dirname: false,
        __filename: false
    },
    entry: ['@babel/polyfill/noConflict', join(__dirname, '../src/index')],
    output: {
        filename: 'index.js',
        path: join(__dirname, '../public')
    },
    plugins: [
        new CopyPlugin([
            {
                from: join(__dirname, '../package.json'),
                to: join(__dirname, '../public/package.json')
            }
        ])
    ]
});
