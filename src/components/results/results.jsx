import React from 'react';
import PropTypes from 'prop-types';
import styles from './results.scss';
import ResultsCount from '../results-count';
import ResultsBody from '../results-body';
import ResultsSort from '../results-sort';
import { fetchData } from '../../actions/results-actions';

class Results extends React.PureComponent {
    async componentDidMount() {
        const { dispatch } = this.props;
        const data = await fetchData();
        dispatch(data);
    }

    render() {
        const { results, error, loading, onOpenFilmHandler } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!results.length) {
            return (
                <main className={styles.results}>
                    <div className={styles.resultsHeading} />
                    <div className={styles.resultsError}>No films found</div>
                </main>
            );
        }

        return (
            <main className={styles.results}>
                <div className={styles.resultsHeading}>
                    <ResultsCount count={results.length} />
                    <ResultsSort />
                </div>
                <ResultsBody
                    results={results}
                    onOpenFilmHandler={onOpenFilmHandler}
                />
            </main>
        );
    }
}

Results.propTypes = {
    results: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
    onOpenFilmHandler: PropTypes.func,
    fetchData: PropTypes.func
};

Results.defaultProps = {
    results: [],
    error: null,
    loading: false
};

export default Results;
