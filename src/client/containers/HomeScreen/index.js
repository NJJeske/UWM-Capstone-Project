import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Example } from '../../components';

class HomeScreen extends Component {
  componentDidMount() {
 //   this.props.exampleAction();
  }

  render() {
    return (
      <main>
        <h1>App Container</h1>
        <p>If the redux extension is installed, you should see that an action was called and that the reducer was triggered.</p>
        <Example />
      </main>
    );
  }
}

export default connect()(HomeScreen);
