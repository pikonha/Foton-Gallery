const { GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addPost: require("./post/addPost"),
    likePost: require("./post/deletePost"),
    unlikePost: require("./post/likePost"),
    deletePost: require("./post/unlikePost")
  }
});
