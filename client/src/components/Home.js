import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const posts = [
    { id: 1, username: "A", body: "AAAA", date: Date.now(), likes: 3 },
    { id: 2, username: "B", body: "BBBB", date: Date.now(), likes: 2 }
  ];

  // posts.map(post => {
  //   posts.push({
  //     user: post.username,
  //     body: post.body,
  //     date: post.date,
  //     likes: post.likes,
  //     comments: []
  //   });
  // });

  return (
    <div>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Link to="/">{post.username}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
