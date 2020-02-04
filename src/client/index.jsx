import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { reduxStore, reduxPersistor } from '../lib/redux/configure-store';
import App from '../components/app';
import ErrorBoundary from '../components/error-boundary/error-boundary-container';

const render = (Component) => {
    hydrate(
        <ErrorBoundary>
            <Provider store={reduxStore}>
                <PersistGate loading={null} persistor={reduxPersistor}>
                    <BrowserRouter>
                        <Component />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </ErrorBoundary>,
        document.getElementById('root')
    );
};
render(App);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('../components/app', () => {
        const NextApp = require('../components/app').default;
        render(NextApp);
    });
}
