import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomeScreen } from './containers/';

export default () => (
    <React.Fragment>
        <Header />
        <Switch>
            <Route path="/" component={HomeScreen} />
        </Switch>
        <Footer />
    </React.Fragment>
);
