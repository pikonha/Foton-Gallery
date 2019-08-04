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
      resolve: async (source, args, ctx) => {
        try {
          return await ctx.db.Post.find({});
        } catch (e) {
          throw new Error(e);
        }
      }
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
        return new_post.save();
      }
    },
    likePost: {
      type: Post,
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (source, { id }, ctx) => {
        try {
          const post = await ctx.db.Post.findById(id);
          post.likes += 1;

          return post.save();
        } catch (e) {
          throw new Error(e);
        }
      }
    },
    unlikePost: {
      type: Post,
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (source, { id }, ctx) => {
        try {
          const post = await ctx.db.Post.findById(id);

          if (post.likes > 0) {
            post.likes -= 1;
            return post.save();
          }
          return post;
        } catch (e) {
          throw new Error(e);
        }
      }
    },
    deletePost: {
      type: Post,
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (source, { id }, ctx) => {
        try {
          const post = await ctx.db.Post.findById(id);
          return post.remove();
        } catch (e) {
          throw new Error(e);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
