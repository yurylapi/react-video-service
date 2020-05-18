import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilmDetails from './film-details';
import openedFilmSelector from './selectors/opened-film-selector';

const mapStateToProps = ({ results }, { filmId, onCloseFilmHandler }) => ({
    film: openedFilmSelector(results.movies, filmId),
    onCloseFilmHandler
});

export default withRouter(connect(mapStateToProps)(FilmDetails));
