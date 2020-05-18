import React from 'react';
import { Redirect } from 'react-router';
import FilmPropTypesShape from '../../lib/prop-type-shapes/film-prop-types-shape';
import styles from './film-details.scss';
import ItemImage from '../item-image';
import FilmTitle from '../film-title';
import FilmRating from '../film-rating';
import FilmGenre from '../film-genre';
import FilmDurationAndYear from '../film-duration-and-year';
import FilmDescription from '../film-description';
import Button from '../button';
import Logo from '../logo';

const FilmDetails = ({ film, onCloseFilmHandler }) =>
    !film ? (
        <Redirect to="/404" />
    ) : (
        <header className={styles.header}>
            <Logo />
            <Button
                onClick={onCloseFilmHandler}
                title="SEARCH"
                classModifier="buttonBack"
            />

            <div className={styles.details}>
                <div className={styles.poster}>
                    <ItemImage
                        classModifier="cover"
                        img={film.poster_path}
                        alt={film.title}
                    />
                </div>
                <div className={styles.description}>
                    <FilmTitle title={film.title} />
                    <FilmRating rating={film.vote_average} />
                    <FilmGenre genres={film.genres} />
                    <FilmDurationAndYear
                        duration={film.runtime}
                        year={film.release_date}
                    />
                    <FilmDescription description={film.overview} />
                </div>
            </div>
        </header>
    );

export default FilmDetails;

FilmDetails.propTypes = {
    film: FilmPropTypesShape
};
