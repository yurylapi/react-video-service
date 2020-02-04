import React from 'react';
import styles from './results-body.scss';
import ResultsItem from '../results-item';

const ResultsBody = (props) => {
    const resultsItems = props.results.map((film) => (
        <ResultsItem
            key={film.id}
            data={film}
            onClick={() => props.onOpenFilmHandler(film)}
        />
    ));

    return <div className={styles.resultsBody}>{resultsItems}</div>;
};

export default ResultsBody;
