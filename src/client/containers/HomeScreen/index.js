import React, { Component } from "react";
import { connect } from "react-redux";
import HomepageButtonCluster from "../../components/HomepageButtonCluster";
import ProfileButton from "../../components/ProfileButton";
import "../../sass/_homescreen.scss";

export class HomeScreen extends Component {
  render() {
    return (
      <main className="homescreen-main">
        <div className="profileButton">
          <ProfileButton auth={this.props.auth} />
        </div>
        <h1 className="title">MyPortfolio</h1>
        <div className="buttonCluster">
          <HomepageButtonCluster />
        </div>
      </main>
    );
  }
}

export default connect()(HomeScreen);
