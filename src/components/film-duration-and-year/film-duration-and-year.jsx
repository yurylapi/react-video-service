import React from 'react';
import styles from './film-duration-and-year.scss';

const FilmDurationAndYear = (props) => (
    <div className={styles.durationAndYear}>
        <span className={styles.duration}>{props.duration} min</span>
        <span className={styles.year}>{props.year}</span>
    </div>
);

export default FilmDurationAndYear;
