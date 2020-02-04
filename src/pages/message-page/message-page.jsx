import React from 'react';
import { Helmet } from 'react-helmet';
import SearchForm from '../../components/search-form';
import ResultsMessage from '../../components/results-message';
import Footer from '../../components/footer';

const MessagePage = ({ history, message }) => {
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
            <ResultsMessage message={message} />
            <Footer />
        </React.Fragment>
    );
};

export default MessagePage;
