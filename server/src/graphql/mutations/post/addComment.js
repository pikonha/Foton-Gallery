import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import PostType from "../../types/Post";

module.exports = {
  type: PostType,
  args: {
    owner: { type: new GraphQLNonNull(GraphQLID) },
    post: { type: new GraphQLNonNull(GraphQLID) },
    body: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, ctx) => {
    const post = await ctx.db.Post.findById(args.post);

    if (post) {
      post.comments.push({
        owner: args.owner,
        body: args.body
      });

      return post.save();
    }
    return null;
  }
};
