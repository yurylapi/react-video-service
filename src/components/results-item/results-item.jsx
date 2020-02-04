import React from 'react';
import PropTypes from 'prop-types';
import FilmPropTypesShape from '../../lib/prop-type-shapes/film-prop-types-shape';
import styles from './results-item.scss';
import ItemImage from '../item-image';
import ItemTitle from '../item-title';
import ItemReleaseDate from '../item-release-date';
import ItemGenre from '../item-genre';
import FilmRating from '../film-rating';

const ResultsItem = (props) => (
    <div className={styles.resultsItem} onClick={props.onClick}>
        <ItemImage
            classModifier="item-image"
            img={props.data.poster_path}
            title={props.data.title}
        />
        <div className={styles.resultsItemWording}>
            <ItemTitle title={props.data.title} />
            <ItemReleaseDate year={props.data.release_date} />
            <ItemGenre genres={props.data.genres} />
            <FilmRating rating={props.data.vote_average} />
        </div>
    </div>
);

export default ResultsItem;

ResultsItem.propTypes = {
    film: FilmPropTypesShape,
    onClick: PropTypes.func
};
