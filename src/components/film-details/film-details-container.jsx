import { connect } from 'react-redux';
import FilmDetails from './film-details';
import openedFilmSelector from './selectors/opened-film-selector';

const mapStateToProps = ({ results }, { filmId, onCloseFilmHandler }) => ({
    film: openedFilmSelector(results.movies, filmId),
    onCloseFilmHandler
});

export default connect(mapStateToProps)(FilmDetails);
