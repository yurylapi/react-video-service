import React from 'react';
import { Helmet } from 'react-helmet';
import FilmDetails from '../../components/film-details';
import SameGenreFilms from '../../components/same-genre-films';
import Footer from '../../components/footer';

const FilmPage = ({ history, match }) => {
    const closeFilmHandler = () => {
        history.push('/search/');
    };
    const onOpenFilmHandler = (film) => {
        history.push(`/film/${film.id}`);
    };
    const filmId = Number(match.params.filmId) || null;

    return (
        <React.Fragment>
            <Helmet>
                <title>Netflix Roulette</title>
            </Helmet>
            <FilmDetails
                onCloseFilmHandler={closeFilmHandler}
                filmId={filmId}
            />
            <SameGenreFilms
                onOpenFilmHandler={onOpenFilmHandler}
                filmId={filmId}
            />
            <Footer />
        </React.Fragment>
    );
};

export default FilmPage;
