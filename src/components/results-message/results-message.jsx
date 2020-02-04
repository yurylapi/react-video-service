import React from 'react';
import styles from './results-message.scss';

const ResultsMessage = ({ message }) => (
    <main className={styles.results}>
        <div className={styles.resultsHeading} />
        <div className={styles.resultsError}>{message}</div>
    </main>
);

export default ResultsMessage;
