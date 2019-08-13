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
      post.likes += 1;

      return post.save();
    } catch (e) {
      throw new Error(e);
    }
  }
};
