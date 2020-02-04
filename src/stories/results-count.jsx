import React from 'react';
import { storiesOf } from '@storybook/react';
import ResultsCount from '../components/results-count';

storiesOf('Results/ResultsCount', module).add('ResultsItem', () => (
    <ResultsCount count={'9'} />
));
