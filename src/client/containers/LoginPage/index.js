import React, { Component } from "react";
import { connect } from "react-redux";
import "../../sass/_loginpage.scss";

export class LoginPage extends Component {
  render() {
    return <main className="login-main" />;
  }
}

export default connect()(LoginPage);
