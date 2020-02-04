import React from 'react';
import Logo from '../logo';
import SearchField from '../search-field';
import SearchFilter from '../search-filter';
import styles from './search-form.scss';
import { SEARCH_OPTIONS } from '../../constants';

const SearchForm = ({
    searchString,
    searchCriteria,
    changeSearchCriteriaHandler,
    changeSearchInputHandler,
    onSubmitSearch
}) => (
    <header className={styles.header}>
        <Logo />
        <h1 className={styles.heading}>Find your movie</h1>
        <form onSubmit={onSubmitSearch}>
            <SearchField
                value={searchString}
                onChange={(event) =>
                    changeSearchInputHandler(event.target.value.toLowerCase())
                }
            />
            <input
                className={styles.buttonAction}
                type="submit"
                value="Search"
            />
        </form>
        <SearchFilter
            options={SEARCH_OPTIONS}
            currentOption={searchCriteria}
            onResultsSortChange={changeSearchCriteriaHandler}
        />
    </header>
);

export default SearchForm;
