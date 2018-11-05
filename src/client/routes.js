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
  TimelinePage,
  LoginPage
} from "./containers";

const routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/documents" component={DocumentsPage} />
      <Route path="/education" component={EducationPage} />
      <Route path="/experience" component={ExperiencePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/timeline" component={TimelinePage} />
    </Switch>
  </React.Fragment>
);

export default withRouter(routes);
