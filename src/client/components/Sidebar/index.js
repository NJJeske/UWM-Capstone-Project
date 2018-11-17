import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/_sidebar.scss';

/*
 * Sidebar component of the project that will be used on all pages aside from the
 * homescreen. This sidebar makes use of the react-burger-menu library component
 * and is retractable.
 */
export class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <Link className="menu-item" to="/home">
          <FontAwesomeIcon icon="home" /> Home
                </Link>
        <Link className="menu-item" to="/profile">
          <FontAwesomeIcon icon="user" /> Profile
                </Link>
        <Link className="menu-item" to="/documents">
          <FontAwesomeIcon icon="file-alt" /> Documents
                </Link>
        <Link className="menu-item" to="/experience">
          <FontAwesomeIcon icon="briefcase" /> Experience
                </Link>
        <Link className="menu-item" to="/education">
          <FontAwesomeIcon icon="graduation-cap" /> Education
                </Link>
        <Link className="menu-item" to="/projects">
          <FontAwesomeIcon icon="project-diagram" /> Projects
                </Link>
        <Link className="menu-item" to="/contacts">
          <FontAwesomeIcon icon="address-book" /> Contacts
                </Link>
        <Link className="menu-item" to="/timeline">
          <FontAwesomeIcon icon="calendar-alt" /> Timeline
                </Link>
      </Menu>
    );
  }
}

export default Sidebar;
