"use strict";

const {
  GraphQLObjectType
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    post: require("./post/getPost"),
    posts: require("./post/getPosts")
  }
});