import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import MessagePage from '../../pages/message-page';
import SearchPage from '../../pages/search-page';
import FilmsPage from '../../pages/films-page';
import './app.scss';

const App = () => (
    <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/film" component={FilmsPage} />
        <Route
            path="/404"
            render={(props) => (
                <MessagePage
                    message="404. Invalid URL, sorry for that"
                    {...props}
                />
            )}
        />
        <Redirect to="/404" />
    </Switch>
);

export default hot(App);
