const fs = require('fs');
const path = require('path');

/* eslint-disable no-param-reassign */
module.exports = fs.readdirSync(path.join(__dirname, '../node_modules'))
    .filter((dir) => !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(dir))
    .reduce((externals, mod) => {
        externals[mod] = `commonjs ${mod}`;
        return externals;
    }, {});
/* eslint-enable no-param-reassign */
