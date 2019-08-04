const {
  GraphQLID,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const Post = require("./types/Post");

const addPost = require("./mutations/addPost");
const deletePost = require("./mutations/deletePost");
const likePost = require("./mutations/likePost");
const unlikePost = require("./mutations/unlikePost");

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
    addPost: addPost,
    likePost: likePost,
    unlikePost: unlikePost,
    deletePost: deletePost
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
