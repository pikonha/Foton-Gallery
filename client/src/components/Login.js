import React, { useState } from "react";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form className="login-form" action="/" method="get">
        <input
          name="username"
          className="field"
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
          required
        />
        <input
          name="password"
          value={password}
          className="field"
          onChange={e => setPassword(e.target.value)}
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

export default LoginForm;
