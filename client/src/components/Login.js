import React from "react";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleFieldChange(e) {
    const formData = Object.assign({}, this.state);
    formData[e.target.name] = e.target.value;
    this.setState(formData);
  }

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>

        <form className="login-form" action="/" method="get">
          <input
            name="username"
            className="field"
            onChange={this.handleFieldChange}
            type="text"
            placeholder="Username"
            required
          />
          <input
            name="password"
            className="field"
            onChange={this.handleFieldChange}
            type="password"
            placeholder="Password"
            required
          />

          <div className="login-btns">
            <button className="btn register-btn">Register</button>
            <button className="btn login-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
