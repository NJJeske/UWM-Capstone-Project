import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  HomeScreen,
  ContactsPage,
  DocumentsPage,
  EducationPage,
  ExperiencePage,
  ProfilePage,
  ProjectsPage,
  TimelinePage
} from "./containers";

const routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route exact path="/documents" component={DocumentsPage} />
      <Route exact path="/education" component={EducationPage} />
      <Route exact path="/experience" component={ExperiencePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/timeline" component={TimelinePage} />
    </Switch>
  </React.Fragment>
);

export default withRouter(routes);
