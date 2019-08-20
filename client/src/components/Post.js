import React from "react";
import styled from "styled-components";
import moment from "moment";

// import Comment from "./Comment";

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

function Post(props) {
  return (
    <>
      <StyledPost>
        <span className="username-span">{props.username}</span>
        <span className="body-content">{props.body}</span>

        <span className="created-span">
          {moment(props.created * 1000).format("MMM Do YY, h:mm")}
        </span>
        <span className="like-span">Likes: {props.likes}</span>

        <div className="btn-container">
          <button>Comment</button>
          <button>Like</button>
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
