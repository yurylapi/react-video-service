import { connect } from 'react-redux';
import ResultsSort from './results-sort';
import { changeSort } from '../../actions/sort-actions';

const mapStateToProps = ({ sort }) => ({
    currentSortCriteria: sort.sortCriteria
});

const mapDispatchToProps = (dispatch) => ({
    changeSortHandler: (sortCriteria) => dispatch(changeSort(sortCriteria))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSort);
