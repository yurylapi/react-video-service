import { connect } from 'react-redux';
import SearchForm from './search-form';
import {
    changeSearchCriteria,
    changeSearchInput
} from '../../actions/search-actions';

const mapStateToProps = ({ search }, { onSubmitSearch }) => ({
    searchString: search.searchString,
    searchCriteria: search.searchCriteria,
    onSubmitSearch
});

const mapDispatchToProps = (dispatch) => ({
    changeSearchCriteriaHandler: (searchCriteria) =>
        dispatch(changeSearchCriteria(searchCriteria)),
    changeSearchInputHandler: (searchInput) =>
        dispatch(changeSearchInput(searchInput))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
