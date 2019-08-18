import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import FormPost from "./FormPost";
import Post from "./Post";

const Container = styled.div`
  margin: auto;
  width: 60%;
`;

function Home() {
  const { loading, error, data } = useQuery(gql`
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
  `);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error :/</span>;

  return (
    <Container>
      <FormPost />

      <ul>
        {data.posts.map(post => {
          return (
            <Post
              key={post.id}
              username={post.owner.username}
              body={post.body}
              likes={post.likes}
              created={post.created}
            />
          );
        })}
      </ul>
    </Container>
  );
}

export default Home;
