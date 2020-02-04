import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchField from '../components/search-field';

const searchValue = 'Some search';

storiesOf('SearchForm/SearchField', module).add('standard', () => (
    <SearchField value={searchValue} onChange={action('changed')} />
));
