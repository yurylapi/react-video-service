import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchCriteriaList from '../components/search-criteria-list';
import { SEARCH_OPTIONS } from '../constants';

const options = SEARCH_OPTIONS;
const currentOption = SEARCH_OPTIONS.TITLE;

storiesOf('SearchForm/SearchCriteriaList', module).add('standard', () => (
    <SearchCriteriaList
        options={options}
        currentOption={currentOption}
        onResultsSortChange={action('clicked')}
    />
));
