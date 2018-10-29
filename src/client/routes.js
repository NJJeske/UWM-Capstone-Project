<<<<<<< HEAD
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomeScreen } from "./containers/";

const routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
    </Switch>
  </React.Fragment>
=======
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
>>>>>>> projects/component
);

export default withRouter(routes);
