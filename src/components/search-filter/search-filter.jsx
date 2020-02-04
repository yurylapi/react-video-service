import React from 'react';
import SearchCriteriaList from '../search-criteria-list';
import styles from './search-filter.scss';

const SearchFilter = ({ options, currentOption, onResultsSortChange }) => (
    <div className={styles.filter}>
        <span>Search by </span>
        <SearchCriteriaList
            options={options}
            currentOption={currentOption}
            onResultsSortChange={onResultsSortChange}
        />
    </div>
);

export default SearchFilter;
