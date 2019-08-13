"use strict";

const {
  GraphQLString
} = require("graphql");

const Post = require("../../types/Post");

module.exports = {
  type: Post,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: async (source, _ref, ctx) => {
    let {
      id
    } = _ref;

    try {
      const post = await ctx.db.Post.findById(id);
      return post.remove();
    } catch (e) {
      throw new Error(e);
    }
  }
};