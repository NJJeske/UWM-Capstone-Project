import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/_sidebar.scss";

/*
 * Sidebar component of the project that will be used on all pages aside from the
 * homescreen. This sidebar makes use of the react-burger-menu library component
 * and is retractable.
 */
export class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          <FontAwesomeIcon icon="home" /> Home
        </a>
        <a className="menu-item" href="/profile">
          <FontAwesomeIcon icon="user" /> Profile
        </a>
        <a className="menu-item" href="/documents">
          <FontAwesomeIcon icon="file-alt" /> Documents
        </a>
        <a className="menu-item" href="/experience">
          <FontAwesomeIcon icon="briefcase" /> Experience
        </a>
        <a className="menu-item" href="/education">
          <FontAwesomeIcon icon="graduation-cap" /> Education
        </a>
        <a className="menu-item" href="/projects">
          <FontAwesomeIcon icon="project-diagram" /> Projects
        </a>
        <a className="menu-item" href="/contacts">
          <FontAwesomeIcon icon="address-book" /> Contacts
        </a>
        <a className="menu-item" href="/timeline">
          <FontAwesomeIcon icon="calendar-alt" /> Timeline
        </a>
      </Menu>
    );
  }
}

export default Sidebar;
