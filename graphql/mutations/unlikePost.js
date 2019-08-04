const { GraphQLString } = require("graphql");

const Post = require("../types/Post");

module.exports = {
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
};
