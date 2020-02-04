const { join } = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.sass'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [
        new WebpackBar()
    ],
    output: {
        path: join(__dirname, '../public/assets'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
