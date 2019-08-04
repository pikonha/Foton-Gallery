const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const Post = require("../database/mongo/Post");
const PostGraphQLType = require("./types/Post");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    post: {
      type: PostGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => Post.findById(args.id)
    },
    posts: {
      type: GraphQLList(PostGraphQLType),
      resolve: () => Post.find({})
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
