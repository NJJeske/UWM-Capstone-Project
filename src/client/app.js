'use strict';
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes store={store} />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('origin')
);
