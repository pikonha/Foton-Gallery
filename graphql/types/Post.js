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
    id: { type: GraphQLID },
    owner: { type: GraphQLString },
    author: { type: GraphQLString },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    likes: { type: GraphQLInt },
    tags: { type: GraphQLList(GraphQLString) }
  })
});

module.exports = Post;
