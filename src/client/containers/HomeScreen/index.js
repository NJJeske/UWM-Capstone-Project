import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Palindrome, Concatenation } from '../../components';

class HomeScreen extends Component {
    componentDidMount() {
        //   this.props.exampleAction();
    }

    render() {
        return (
            <main>
                <h1>Home Screen example</h1>
                <p>If the redux extension is installed, you should see that an action was called and that the reducer was triggered.</p>
                <Palindrome />
                <Concatenation />
            </main>
        );
    }
}

export default connect()(HomeScreen);
