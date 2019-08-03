const { GraphQLObjectType, GraphQLString } = require("graphql");

const PostType = new GraphQLObjectType({
  name: "PostQueryType",
  fields: {
    author_id: { type: GraphQLString },
    author: { type: GraphQLString },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    likes: Number
  }
});

module.exports = PostType;
