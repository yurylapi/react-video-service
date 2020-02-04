import React from 'react';
import PropTypes from 'prop-types';
import styles from './same-genre-films.scss';
import ResultsBody from '../results-body';

const SameGenreFilms = ({ films, openedFilmGenres, onOpenFilmHandler }) => {
    if (!films.length) {
        return (
            <main className={styles.results}>
                <div className={styles.resultsHeading} />
                <div className={styles.resultsError}>No films found</div>
            </main>
        );
    }

    return (
        <main className={styles.results}>
            <div className={styles.resultsHeadingMore}>
                More films by <span>{openedFilmGenres.join(', ')}</span> genre
            </div>
            <ResultsBody
                results={films}
                onOpenFilmHandler={onOpenFilmHandler}
            />
        </main>
    );
};

SameGenreFilms.propTypes = {
    films: PropTypes.array,
    openedFilmGenres: PropTypes.array,
    onOpenFilmHandler: PropTypes.func
};

SameGenreFilms.defaultProps = {
    films: [],
    filmGenre: ''
};

export default SameGenreFilms;
