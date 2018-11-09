"use strict";
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import Routes from "./routes.js";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faCheck,
  faBan,
  faTrashAlt,
  faHome,
  faUser,
  faUserCog,
  faFileAlt,
  faGraduationCap,
  faBriefcase,
  faCalendarAlt,
  faProjectDiagram,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faEdit,
  faCheck,
  faBan,
  faTrashAlt,
  faHome,
  faUser,
  faUserCog,
  faFileAlt,
  faGraduationCap,
  faBriefcase,
  faCalendarAlt,
  faProjectDiagram,
  faAddressBook
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("origin")
);
