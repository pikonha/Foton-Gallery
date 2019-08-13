import { GraphQLString } from "graphql";

import Post from "../../types/Post";

module.exports = {
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
};
