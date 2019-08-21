import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      owner {
        username
      }
      body
      likes
      created
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost($body: String!) {
    addPost(body: $body) {
      id
      owner {
        username
      }
      body
      likes
    }
  }
`;

function FormPost() {
  const [content, setContent] = useState("");
  const [addPost] = useMutation(ADD_POST, {
    variables: {
      body: content
    },
    refetchQueries: ["getPosts"]
  });

  function handleForm(e) {
    e.preventDefault();

    addPost();
    setContent("");
  }

  return (
    <StyledForm onSubmit={handleForm}>
      <textarea
        placeholder="What is happening..."
        onChange={e => setContent(e.target.value)}
        value={content}
        required
      />
      <button type="submit">Send</button>
    </StyledForm>
  );
}

export default FormPost;

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
    border-radius: 4px;

    &:hover {
      border-color: #930;
      background: #fff;

      color: #5d5d5d;
      box-shadow: inset 0 1px rgba(34, 25, 25, 0.2),
        0 1px rgba(255, 255, 255, 0.6), 0 0 7px rgba(235, 82, 82, 0.5);
    }
  }

  button {
    padding: 1%;
    margin-left: 1em;
  }
`;
