import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchFilter from '../components/search-filter';
import { SEARCH_OPTIONS } from '../constants';

const options = SEARCH_OPTIONS;
const currentOption = SEARCH_OPTIONS.TITLE;

storiesOf('SearchForm/SearchFilter', module).add('standard', () => (
    <SearchFilter
        options={options}
        currentOption={currentOption}
        onResultsSortChange={action('changeCriteria')}
    />
));
