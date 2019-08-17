import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form className="login-form" action="/" method="get">
        <input
          className="field"
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
          required
        />
        <input
          className="field"
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
          required
        />
        <input
          className="field"
          onChange={e => setFirstName(e.target.value)}
          type="text"
          placeholder="First name"
          value={firstName}
          required
        />
        <input
          className="field"
          onChange={e => setLastName(e.target.value)}
          type="text"
          placeholder="Last name"
          value={lastName}
          required
        />
        <input
          value={password}
          className="field"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <input
          value={confirmPassword}
          className="field"
          onChange={e => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm password"
          required
        />

        <div className="login-btns">
          <button className="btn cancel-btn">Cancel</button>
          <button className="btn login-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
