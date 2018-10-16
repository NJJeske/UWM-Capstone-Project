import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Header, Footer } from './components';
import { ProjectsPage } from './containers/';

const routes = () => (
    <React.Fragment>
        <Header />
        <Switch>
            {/* <Route exact path="/" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/projects" component={ProjectsPage} />
        </Switch>
        <Footer />
    </React.Fragment>
);

export default withRouter(routes);
