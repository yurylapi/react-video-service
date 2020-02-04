import { addParameters, configure } from '@storybook/react';
import theme from './theme';
import '@storybook/addon-console';
require('./global.scss');

const req = require.context('../stories', true, /\.jsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({
    options: {
        theme: theme
    }
});

configure(loadStories, module);
