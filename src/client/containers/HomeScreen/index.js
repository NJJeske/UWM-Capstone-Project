import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar } from "../../components/Sidebar";

class HomeScreen extends Component {
  render() {
    return (
      <main>
        <Sidebar />
      </main>
    );
  }
}

export default connect()(HomeScreen);
