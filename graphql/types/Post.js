const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require("graphql");

const PostType = new GraphQLObjectType({
  name: "PostQueryType",
  fields: {
    author_id: { type: GraphQLID },
    author: { type: GraphQLString },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    likes: { type: GraphQLList(GraphQLInt) }
  }
});

module.exports = PostType;
