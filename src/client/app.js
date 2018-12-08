'use strict';
import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchEntities } from './redux/actions/entityActions';
import store from './redux/store.js';
import Routes from './routes.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    // Entity action bar
    faEdit, faCheck, faBan, faTrashAlt,
    // Dashboard cluster icons
    faHome, faFileAlt, faGraduationCap, faBriefcase, faCalendarAlt, faCertificate, faProjectDiagram, faAddressBook,
    // Top-right profile button
    faUserCog,
    // Callback page
    faSpinner, faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
library.add(faEdit, faCheck, faBan, faTrashAlt, faHome, faUserCog, faFileAlt, faGraduationCap, faBriefcase, faCalendarAlt, faCertificate, faProjectDiagram, faAddressBook, faSpinner, faExclamationCircle);

class App extends Component {
    componentDidMount() {
        [
            'addresses',
            'certifications',
            'companies',
            'contacts',
            'education',
            'positions',
            'projects'
        ].forEach(entityType => {
            store.dispatch(fetchEntities(entityType));
        });
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('origin')
);
