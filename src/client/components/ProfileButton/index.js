import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

export const ProfileButton = props => (
    <div id='profile-dropdown'>
        <UncontrolledDropdown direction='left'>
            <DropdownToggle className='toggle'>
                <FontAwesomeIcon icon='user-cog'/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => props.history.push('/profile')}>
                    Settings
                </DropdownItem>
                <DropdownItem onClick={() => {
                    props.auth.logout();
                    props.history.push('/login');
                }}>Logout</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>
);

export default withRouter(ProfileButton);
