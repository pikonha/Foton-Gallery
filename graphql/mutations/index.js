const { GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addPost: require("./post/addPost"),
    deletePost: require("./post/deletePost"),
    likePost: require("./post/likePost"),
    unlikePost: require("./post/unlikePost"),
    commentPost: require("./post/addComment"),
    createUser: require("./user/userSignup"),
    updateUser: require("./user/userUpdate")
  }
});
