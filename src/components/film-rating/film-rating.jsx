import React from 'react';
import styles from './film-rating.scss';

const FilmRating = (props) => (
    <span className={styles.rating}>{props.rating}</span>
);

export default FilmRating;
