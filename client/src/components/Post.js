import React, { useState, useEffect } from "react";

import Comment from "./Comment";

function Post(props) {
  const [likes, setLikes] = useState(props.likes);
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {});

  return (
    <>
      <div>
        <h3>{props.username}</h3>
        <p>{props.body}</p>
        <span>{likes}</span>
        <button>Like</button>
        <button>Comment</button>
      </div>
      <ul>
        {comments.foreach(comment => {
          return <Comment key={comment.id} />;
        })}
      </ul>
    </>
  );
}

export default Post;
