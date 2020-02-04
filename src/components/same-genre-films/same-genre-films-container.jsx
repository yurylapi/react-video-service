import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SameGenreFilms from './same-genre-films';

const mapStateToProps = ({ results }, { filmId, onOpenFilmHandler }) => {
    const films = results.movies;

    const openedFilm = films.find(({ id }) => id === filmId);
    const openedFilmGenres = openedFilm.genres;
    const sameGenreFilms = films
        .filter((film) =>
            film.genres.some((genre) => openedFilmGenres.includes(genre))
        )
        .filter((film) => film.id !== openedFilm.id);

    return {
        films: sameGenreFilms,
        openedFilmGenres,
        onOpenFilmHandler
    };
};

export default withRouter(connect(mapStateToProps)(SameGenreFilms));
