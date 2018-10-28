import React, { Component } from "react";
import { connect } from "react-redux";
import { Login } from "../../components/Login";
import { NavBarSide } from "../components/Sidebar";

class LoginScreen extends Component {
  render() {
    return (
      <main>
        <h1>Organize Your Job Hunt - Forever.</h1>
        <NavBarSide />
        <Login />
      </main>
    );
  }
}

export default connect()(LoginScreen);
