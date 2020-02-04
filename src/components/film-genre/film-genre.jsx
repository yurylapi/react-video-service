import React from 'react';
import styles from './film-genre.scss';

const FilmGenre = (props) => {
    const resultsItems = props.genres.map((genre, index) => (
        <span key={index} className={styles.genre}>
            {genre}
        </span>
    ));

    return <div className={styles.container}>{resultsItems}</div>;
};

export default FilmGenre;
