import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
} from './containers';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();
const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

const routes = () => (
    <React.Fragment>
        <Switch>
            <Route path="/" render={(props) => <LoginPage auth={auth} {...props}/>} />
            <Route exact path="/home" render={(props) => <HomeScreen auth={auth} {...props}/>} />
            <Route path="/profile" render={ProfilePage} />
            <Route path="/contacts" render={ContactsPage} />
            <Route path="/documents" render={DocumentsPage} />
            <Route path="/education" render={EducationPage} />
            <Route path="/experience" render={ExperiencePage} />
            <Route path="/projects" render={ProjectsPage} />
            <Route path="/timeline" render={TimelinePage} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <CallbackPage {...props} />
            }}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(routes);
