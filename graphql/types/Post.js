const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require("graphql");

const PostGraphQLType = new GraphQLObjectType({
  name: "Post",
  fields: {
    author_id: {
      type: GraphQLID,
      resolve: ({ author_id }, arguments, context) => author_id
    },
    author: { type: GraphQLString },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    likes: { type: GraphQLList(GraphQLInt) }
  }
});

module.exports = PostGraphQLType;
