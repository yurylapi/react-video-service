import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/server';
import thunk from 'redux-thunk';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { applyMiddleware, createStore } from 'redux';
import createDocument from './document';
import rootReducer from '../reducers';
import App from '../components/app';
import ErrorBoundary from '../components/error-boundary/error-boundary-container';
import { fetchData } from '../actions/results-actions';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }) => async (req, res) => {
    try {
        const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

        const context = {};
        reduxStore
            .dispatch(fetchData())
            .then(() => {
                const app = (
                    <ErrorBoundary>
                        <Provider store={reduxStore}>
                            <StaticRouter location={req.url} context={context}>
                                <App />
                            </StaticRouter>
                        </Provider>
                    </ErrorBoundary>
                );

                const appString = ReactDOM.renderToString(app);
                const helmet = Helmet.renderStatic();
                const chunkNames = flushChunkNames();
                const { js, styles } = flushChunks(clientStats, { chunkNames });
                const document = createDocument({
                    appString,
                    js,
                    styles,
                    helmet
                });

                if (context.url) {
                    res.writeHead(302, {
                        Location: context.url
                    });
                    res.end();
                    return;
                }

                res.send(document);
            });
    } catch (e) {
        console.error(e);
    }
};
