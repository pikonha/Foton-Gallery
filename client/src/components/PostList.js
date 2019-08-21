import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import Post from "./Post";

const StyledPostList = styled.ul`
  padding: 0;
`;

const GET_POSTS = gql`
  {
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

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error :/</span>;

  return (
    <StyledPostList>
      {data.posts
        .slice(0)
        .reverse()
        .map(post => {
          return (
            <Post
              key={post.id}
              id={post.id}
              username={post.owner.username}
              body={post.body}
              likes={post.likes}
              created={post.created}
            />
          );
        })}
    </StyledPostList>
  );
}

export default PostList;
