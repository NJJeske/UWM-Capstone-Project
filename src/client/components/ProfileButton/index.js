import React, { Component } from "react";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/_profilebutton.scss";

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
    this.routeTo("/");
  }

  render() {
    return (
      <div className="ProfileButtonDropdown">
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle className="toggle">
            <FontAwesomeIcon icon="user-cog" />{" "}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.routeTo("/profile")}>
              Settings
            </DropdownItem>
            <DropdownItem onClick = {() => this.logout()}>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
    );
  }
}

export default withRouter(ProfileButton);
