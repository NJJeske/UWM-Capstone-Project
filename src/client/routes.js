import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { ProjectsPage } from './containers';

const routes = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/projects"/>}/>
            <Route exact path="/projects" component={ProjectsPage} />
        </Switch>
    </React.Fragment>
);

export default withRouter(routes);
