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
      type: GraphQLString,
      resolve: user => user._id
    },
    author_id: { type: GraphQLString },
    author: { type: GraphQLString },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    likes: { type: GraphQLList(GraphQLInt) }
  })
});

module.exports = Post;
