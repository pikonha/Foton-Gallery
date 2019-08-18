import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  padding: 1.5em 1.5em 0;
  display: flex;
  align-items: center;

  textarea {
    width: 80%;
    height: 8em;
    padding: 1em;
    resize: none;

    &:hover {
      border-color: #930;
      background: #fff;

      color: #5d5d5d;
      box-shadow: inset 0 1px rgba(34, 25, 25, 0.2),
        0 1px rgba(255, 255, 255, 0.6), 0 0 7px rgba(235, 82, 82, 0.5);
    }
  }

  button {
    padding: 5%;
    background: none;
    border: none;
  }
`;

function FormPost() {
  const [content, setContent] = useState("");

  return (
    <StyledForm>
      <textarea
        placeholder="What is happening..."
        onChange={e => setContent(e.target.value)}
        value={content}
      />
      <button>Send</button>
    </StyledForm>
  );
}

export default FormPost;
