import React from "react";
import { connect } from "react-redux";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", pass: "" };
  }
  render() {
    const { user, pass } = this.state;
    const { concatValue } = this.props;
    return (
      <div className="card">
        <h3>Concatenation:</h3>
        <div className="card-body">
          <div className="email-input">
            <label forhtml="username">Username</label>
            <input
              type="text"
              id="username"
              value={user}
              onChange={e => this.setState({ user: e.target.value })}
            />
          </div>
          <div className="password-input">
            <label forhtml="password">Password</label>
            <input
              type="text"
              id="password"
              value={pass}
              onChange={e => this.setState({ pass: e.target.value })}
            />
          </div>
          <div className="login-button">
            <button
              className="button"
              disabled={!val1 || !val2}
              onClick={() => this.props.createConcatenation(val1, val2)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
