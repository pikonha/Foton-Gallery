const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require("graphql");

const Post = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: user => user._id
    },
    owner: { type: GraphQLString },
    author: { type: GraphQLString },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    likes: { type: GraphQLInt }
  })
});

module.exports = Post;
