import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomeScreen } from "./containers/";

const routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
    </Switch>
  </React.Fragment>
);

export default withRouter(routes);
