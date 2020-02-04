const express = require('express');
const helmet = require('helmet');
const { join } = require('path');
const { log } = require('winston');

/**
 * @param app Express app
 */
const configureDevelopment = (app) => {
    const clientConfig = require('../webpack/client.dev.js');
    const serverConfig = require('../webpack/server.dev.js');
    const { publicPath, path } = clientConfig.output;

    const multiCompiler = require('webpack')([clientConfig, serverConfig]);
    const clientCompiler = multiCompiler.compilers[0];

    app.use(require('webpack-dev-middleware')(multiCompiler, { publicPath }));
    app.use(require('webpack-hot-middleware')(clientCompiler));

    app.use(publicPath, express.static(path));

    app.use(require('webpack-hot-server-middleware')(multiCompiler, {
        serverRendererOptions: { outputPath: path }
    }));
};

/**
 * @param app Express app
 */
const configureProduction = (app) => {
    const clientStats = require('../public/assets/stats.json');
    const serverRender = require('../public/assets/app.server.js').default;
    const publicPath = '/';
    const outputPath = join(__dirname, 'assets');

    app.use(publicPath, express.static(outputPath));
    app.use(serverRender({
        clientStats,
        outputPath
    }));
};

const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

log('info', `Configuring server for environment: ${process.env.NODE_ENV}...`);
app.use(helmet());
app.set('port', process.env.PORT || 8080);

if (isDevelopment) {
    configureDevelopment(app);
} else {
    configureProduction(app);
}

app.listen(app.get('port'), () => log('info', `Server listening on port ${app.get('port')}...`));
