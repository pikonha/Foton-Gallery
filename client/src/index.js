import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3000/graphql"
});

client
  .query({
    query: gql`
      {
        posts {
          owner {
            username
          }
          likes
          created
          description
          comments {
            body
          }
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById("root"));
