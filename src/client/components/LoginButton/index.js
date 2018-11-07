import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import '../../sass/_loginbutton.scss';

export class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.routeTo = this.routeTo.bind(this);
    }
    routeTo(p) {
        let path = p;
        this.props.history.push(path);
    }

    login() {
        console.log('hi');
        console.log(this.props);
        this.props.auth.login();
    }

    render() {
        return (
            <div className="LoginButton">
                <button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                >
                    Log In
                </button>
            </div>
        );
    }
}

export default withRouter(LoginButton);
