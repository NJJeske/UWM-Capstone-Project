import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

/*
 * Sidebar component of the project that will be used on all pages aside from the
 * homescreen. This sidebar makes use of the react-burger-menu library component
 * and is retractable.
 */
export class Sidebar extends Component {
    render() {
        return (
            <Menu width='none'>
                <Link className="menu-item" to="/dashboard">
                    <FontAwesomeIcon icon="home" size='md' /> Dashboard
                </Link>
                <Link className="menu-item" to="/timeline">
                    <FontAwesomeIcon icon="calendar-alt" /> Timeline
                </Link>
                {/* <span className='divider' /> */}
                <Link className="menu-item" to="/documents">
                    <FontAwesomeIcon icon="file-alt" /> Documents
                </Link>
                <Link className="menu-item" to="/experience">
                    <FontAwesomeIcon icon="briefcase" /> Experience
                </Link>
                <Link className="menu-item" to="/education">
                    <FontAwesomeIcon icon="graduation-cap" /> Education
                </Link>
                <Link className="menu-item" to="/certifications">
                    <FontAwesomeIcon icon="certificate" /> Certifications
                </Link>
                <Link className="menu-item" to="/projects">
                    <FontAwesomeIcon icon="project-diagram" /> Projects
                </Link>
                <Link className="menu-item" to="/contacts">
                    <FontAwesomeIcon icon="address-book" /> Contacts
                </Link>
            </Menu>
        );
    }
}

export default Sidebar;
