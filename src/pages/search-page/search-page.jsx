import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ResultsPage from '../results-page';
import SearchForm from '../../components/search-form';
import Footer from '../../components/footer';

const SearchPage = ({ history, match }) => {
    const onSubmitSearch = (event) => {
        history.push(
            `/search/${event.target.querySelector('input[type=text]').value}`
        );
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Netflix Roulette</title>
            </Helmet>
            <SearchForm onSubmitSearch={onSubmitSearch} />
            <Route path={match.path} exact component={ResultsPage} />
            <Route
                path={`${match.path}/:searchString`}
                component={ResultsPage}
            />
            <Footer />
        </React.Fragment>
    );
};

export default SearchPage;
