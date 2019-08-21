import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// import Comment from "./Comment";

const LIKE_POST = gql`
  mutation LikePost($postId: String!) {
    likePost(id: $postId) {
      body
      likes
    }
  }
`;

function Post(props) {
  const [likes, setLikes] = useState(props.likes);

  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      postId: props.id
    },
    update: (_, response) => {
      const { likes } = response.data.likePost;

      if (likes) {
        setLikes(likes);
      }
    }
  });

  function handleLikeEvent(e) {
    likePost();
  }

  return (
    <>
      <StyledPost>
        <span className="username-span">{props.username}</span>
        <span className="body-content">{props.body}</span>

        <span className="created-span">
          {moment(props.created * 1000).format("MMM Do YY, hh:mm")}
        </span>
        <span className="like-span">Likes: {likes}</span>

        <div className="btn-container">
          <button>Comment</button>
          <button onClick={handleLikeEvent}>Like</button>
        </div>
      </StyledPost>
      {/* <ul>
        {comments.foreach(comment => {
          return <Comment key={comment.id} />;
        })}
      </ul> */}
    </>
  );
}

export default Post;

const StyledPost = styled.div`
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  padding: 1rem;
  font: 16px/1.4 helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
  margin: 1em auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

  display: grid;
  grid-template-columns: 1.5fr 2fr 1.7fr;
  grid-template-rows: 2em auto 2em;
  grid-template-areas:
    "username . ."
    "body body body"
    "timestamp likes btns";

  .username-span {
    grid-area: username;
  }

  .like-span {
    grid-area: likes;
  }

  .created-span {
    grid-area: timestamp;
  }

  .body-content {
    grid-area: body;
    margin-bottom: 2em;
  }

  .btn-container {
    grid-area: btns;

    button {
      margin-left: 1em;
      padding: 2%;
      width: 6em;
    }
  }
`;
