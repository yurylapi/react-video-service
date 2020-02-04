import React from 'react';
import styles from './film-title.scss';

const FilmTitle = (props) => (
    <span className={styles.title}>{props.title}</span>
);

export default FilmTitle;
