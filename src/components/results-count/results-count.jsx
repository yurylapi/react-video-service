import React from 'react';
import styles from './results-count.scss';

const ResultsCount = (props) => {
    let resultsCount;

    if (props.count === 0) {
        return <span />;
    }

    switch (props.count) {
        case 0:
            resultsCount = <span />;
            break;
        case 1:
            resultsCount = (
                <span className={styles.resultsCount}>
                    {props.count} movie found
                </span>
            );
            break;
        default:
            resultsCount = (
                <span className={styles.resultsCount}>
                    {props.count} movies found
                </span>
            );
    }

    return resultsCount;
};

export default ResultsCount;
