import { GraphQLList } from "graphql";

import Post from "../../types/Post";

module.exports = {
  type: new GraphQLList(Post),
  resolve: async (_, __, ctx) => {
    try {
      return await ctx.db.Post.find({});
    } catch (e) {
      throw new Error(e);
    }
  }
};
