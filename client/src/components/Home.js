import React from "react";
import styled from "styled-components";

import FormPost from "./FormPost";
import PostList from "./PostList";

const Container = styled.div`
  margin: auto;
  width: 60%;
`;

function Home() {
  return (
    <Container>
      <FormPost />
      <PostList />
    </Container>
  );
}

export default Home;
