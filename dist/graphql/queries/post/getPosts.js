"use strict";

const {
  GraphQLList
} = require("graphql");

const Post = require("../../types/Post");

module.exports = {
  type: new GraphQLList(Post),
  resolve: async (source, args, ctx) => {
    try {
      return await ctx.db.Post.find({});
    } catch (e) {
      throw new Error(e);
    }
  }
};