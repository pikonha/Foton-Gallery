import { GraphQLID } from "graphql";

import Post from "../../types/Post";

module.exports = {
  type: Post,
  args: { id: { type: GraphQLID } },
  resolve: async (source, { id }, ctx) => {
    try {
      return await ctx.db.Post.findById(id);
    } catch (e) {
      throw new Error(e);
    }
  }
};
