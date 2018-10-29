import React, { Component } from "react";
import { Link } from "react-router";
import { Nav, NavItem, NavLink, button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../sass/_sidebar.scss";
import { HomeScreen } from "../../containers/HomeScreen";
import { ProfilePage } from "../../containers/ProfilePage";
import { DocumentsPage } from "../../containers/DocumentsPage";
import { ExperiencePage } from "../../containers/ExperiencePage";
import { EducationPage } from "../../containers/EducationPage";
import { ProjectsPage } from "../../containers/ProjectsPage";
import { ContactsPage } from "../../containers/ContactsPage";
import { TimelinePage } from "../../containers/TimelinePage";

export class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
        <Nav className="navbar col-md-2 d-none d-md-block bg-light sidebar">
          <div class="h1-holder">
            <h1>MyPortfolio</h1>
          </div>
          <div class="gap" />
          <NavItem>
            <NavLink href="TODO">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">My Documents</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">Contacts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="TODO">Timeline</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
