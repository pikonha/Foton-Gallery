const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const Post = require("./types/Post");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    post: {
      type: Post,
      args: { id: { type: GraphQLString } },
      resolve: async (source, args, ctx) => {
        try {
          return await ctx.db.Post.findById(args.id);
        } catch (e) {
          throw new Error(e);
        }
      }
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: (source, args, ctx) => ctx.db.Post.find({})
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
