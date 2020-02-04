import React from 'react';
import { Helmet } from 'react-helmet';
import Results from '../../components/results';

const ResultsPage = ({ history, match }) => {
    const onOpenFilmHandler = (film) => {
        history.push(`/film/${film.id}`);
    };
    const searchString = match.params.searchString || '';

    return (
        <React.Fragment>
            <Helmet>
                <title>Netflix Roulette</title>
            </Helmet>
            <Results
                searchString={searchString}
                onOpenFilmHandler={onOpenFilmHandler}
            />
        </React.Fragment>
    );
};

export default ResultsPage;
