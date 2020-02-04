import PropTypes from 'prop-types';

const FilmPropTypesShape = PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string
});

export default FilmPropTypesShape;
