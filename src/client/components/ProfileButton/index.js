import React, { Component } from 'react';
import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/_profilebutton.scss';

export class ProfileButton extends Component {
    constructor(props) {
        super(props);
        this.routeTo = this.routeTo.bind(this);
    }

    routeTo(p) {
        let path = p;
        this.props.history.push(path);
    }

    logout() {
        this.props.auth.logout();
        location.href =
      'https://uwm-capstone.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A8080%2F&client_id=UhJh8oO1lZ41WeP52AihFavNxSkkEK3c';
    }

    render() {
        return (
            <div className="ProfileButtonDropdown">
                <UncontrolledButtonDropdown direction="left">
                    <DropdownToggle className="toggle">
                        <FontAwesomeIcon icon="user-cog" />{' '}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.routeTo('/profile')}>
              Settings
                        </DropdownItem>
                        <DropdownItem onClick={() => this.logout()}>Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
        );
    }
}

export default withRouter(ProfileButton);
