import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SearchPage from '../search-page';
import FilmPage from '../film-page';

const FilmsPage = ({ match }) => (
    <React.Fragment>
        <Helmet>
            <title>Netflix Roulette</title>
        </Helmet>
        <Route path="/film" exact component={SearchPage} />
        <Route path={`${match.path}/:filmId`} component={FilmPage} />
    </React.Fragment>
);

export default FilmsPage;
