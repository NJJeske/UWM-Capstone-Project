'use strict';
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import Routes from './routes.js';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('origin')
);
