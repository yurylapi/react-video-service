import React from 'react';
import styles from './film-description.scss';

const FilmDescription = (props) => (
    <div className={styles.filmDescription}>{props.description}</div>
);

export default FilmDescription;
