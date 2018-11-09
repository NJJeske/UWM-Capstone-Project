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
  LoginPage,
  CallbackPage
} from "./containers";
import Auth from "./Auth/Auth";
import history from "./history";

const auth = new Auth();
const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={() => <LoginPage auth={auth} />} />
      <Route path="/home" component={() => <HomeScreen auth={auth} />} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/documents" component={DocumentsPage} />
      <Route path="/education" component={EducationPage} />
      <Route path="/experience" component={ExperiencePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/timeline" component={TimelinePage} />
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props);
          return <CallbackPage {...props} />;
        }}
      />
    </Switch>
  </React.Fragment>
);

export default withRouter(routes);
