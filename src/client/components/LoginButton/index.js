import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import "../../sass/_loginbutton.scss";

export class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.routeTo = this.routeTo.bind(this);
    this.login = this.login.bind(this);
  }
  routeTo(p) {
    let path = p;
    this.props.history.push(path);
  }

  login() {
    this.props.auth.login();
  }

  render() {
    return (
      <Button
        className="loginbtn"
        color="Secondary"
        onClick={() => this.login()}
      >
        <span className="btntext">Login Or Create An Account</span>
      </Button>
    );
  }
}

export default withRouter(LoginButton);
