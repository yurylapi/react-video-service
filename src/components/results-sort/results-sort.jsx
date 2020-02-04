import React from 'react';
import styles from './results-sort.scss';
import ResultsSortList from '../results-sort-list';
import { SORT_OPTIONS } from '../../constants';

const ResultsSort = ({ currentSortCriteria, changeSortHandler }) => (
    <span>
        <span className={styles.resultsSort}>Sort by:</span>
        <ResultsSortList
            options={SORT_OPTIONS}
            currentOption={currentSortCriteria}
            onResultsSortChange={changeSortHandler}
        />
    </span>
);

export default ResultsSort;
