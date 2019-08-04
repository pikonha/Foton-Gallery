const {
  GraphQLID,
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
      args: { id: { type: GraphQLID } },
      resolve: async (source, { id }, ctx) => {
        try {
          return await ctx.db.Post.findById(id);
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

const Mutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addPost: {
      type: Post,
      args: {
        owner: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve: (source, args, ctx) => {
        const new_post = new ctx.db.Post({
          owner: args.owner,
          author: args.author,
          description: args.description
        });
        new_post.save();
      }
    }
    // likePost: {},
    // unlikePost: {}
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
