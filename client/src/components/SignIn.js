import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { login } from "../services/auth";

const LOGIN = gql`
  mutation Login($email: LowercaseString!, $password: String!) {
    loginUser(email: $email, password: $password) {
      success
      content
    }
  }
`;

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN, {
    variables: {
      email,
      password
    },
    update: (_, response) => {
      const { success, content } = response.data.loginUser;

      if (success) {
        login(content);
        return props.history.push("/");
      }
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    loginUser();
    setEmail("");
    setPassword("");
  }

  function handleRegister(e) {
    e.preventDefault();
    return props.history.push("/signup");
  }

  return (
    <StyledContainer>
      <div>
        <h1 className="form-header">Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            name="username"
            className="field"
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
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
            <button className="btn register-btn" onClick={handleRegister}>
              Register
            </button>
            <button className="btn login-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </StyledContainer>
  );
}

export default LoginForm;

const StyledContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 600px;
    background: lightgray;

    .form-header {
    }

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & input {
        padding: 1%;
      }

      & * {
        margin: 10px;
      }
    }
  }
`;
