import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Results from './results';
import { fetchData } from '../../actions/results-actions';

const filterByTitle = (value) => (item) =>
    item.title.toLowerCase().includes(value);

const filterByGenre = (value) => (item) =>
    item.genres.some((genre) => genre.toLowerCase().includes(value));

const filterByCriteria = {
    title: filterByTitle,
    genres: filterByGenre
};

const sorterByCriteria = (sortField) => (a, b) => b[sortField] - a[sortField];

const mapStateToProps = (
    { results, sort, search },
    { searchString, onOpenFilmHandler }
) => {
    const films = results.movies;
    const filter = filterByCriteria[search.searchCriteria](searchString);
    const filmsFiltered = films.filter(filter);
    const sorter = sorterByCriteria(sort.sortCriteria);
    const filmsFilteredAndSorted = filmsFiltered.sort(sorter);

    return {
        results: filmsFilteredAndSorted,
        error: results.error,
        loading: results.loading,
        onOpenFilmHandler
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchData
        },
        dispatch
    );

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Results)
);
