import React, { Component } from "react";
import { Nav, NavItem, NavLink, button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../sass/_sidebar.scss";

export class Sidebar extends Component {
  render() {
    return (
      <Nav className="col-md-2 d-none d-md-block bg-dark sidebar">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">My Documents</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Education</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Contacts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Timeline</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
