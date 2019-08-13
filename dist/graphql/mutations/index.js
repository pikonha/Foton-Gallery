"use strict";

const {
  GraphQLObjectType
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createUser: require("./user/userSignup"),
    loginUser: require("./user/userLogin"),
    addPost: require("./post/addPost"),
    deletePost: require("./post/deletePost"),
    likePost: require("./post/likePost"),
    unlikePost: require("./post/unlikePost"),
    commentPost: require("./post/addComment")
  }
});