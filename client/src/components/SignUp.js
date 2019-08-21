import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const REGISTER = gql`
  mutation Register(
    $email: LowercaseString!
    $password: String!
    $username: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      email: $email
      password: $password
      username: $username
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      firstName
      lastName
      username
      email
    }
  }
`;

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [signUp] = useMutation(REGISTER, {
    variables: {
      username,
      firstName,
      lastName,
      email,
      password
    },
    update: (_, response) => {
      const { id } = response.data.createUser;

      if (id) {
        return props.history.push("/signin");
      }
    }
  });

  function handleSubmitForm(e) {
    e.preventDefault();

    try {
      signUp();
    } catch (e) {
      console.log("error");
    }
  }

  function handleCancelForm(e) {
    e.preventDefault();
    return props.history.push("/login");
  }

  return (
    <StyledContainer className="login-container">
      <div>
        <h1>Sign Up</h1>

        <form className="login-form" onSubmit={handleSubmitForm}>
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

          <div className="login-btns">
            <button className="btn cancel-btn" onClick={handleCancelForm}>
              Cancel
            </button>
            <button className="btn login-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </StyledContainer>
  );
}

export default Register;

const StyledContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 500px;
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
        width: 50%;
      }

      & * {
        margin: 10px;
      }
    }
  }
`;
