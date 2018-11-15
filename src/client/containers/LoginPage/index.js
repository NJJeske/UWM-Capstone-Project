import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../../components/LoginButton';
import '../../sass/_loginpage.scss';

export class LoginPage extends Component {
    render() {
        return (
            <main className='login-main'>
                <h1>Organize Your Job Hunt - Forever.</h1>
                <div className='loginButton'>
                    <LoginButton auth={this.props.auth} />
                </div>
            </main>
        );
    }
}

export default connect()(LoginPage);
