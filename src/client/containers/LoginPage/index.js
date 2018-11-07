import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../../components/LoginButton';
import '../../sass/_loginpage.scss';

export class LoginPage extends Component {
    render() {
        return (
            <main className="login-main">
                <div className="loginButton">
                    <h4>My portfolio</h4>
                    <LoginButton auth={this.props.auth}/>
                </div>
            </main>
        );
    }
}

export default connect()(LoginPage);
