import { GraphQLID, GraphQLString } from "graphql";

import PostType from "../../types/Post";

module.exports = {
  type: PostType,
  args: {
    user: { type: GraphQLID },
    body: { type: GraphQLString }
  },
  resolve: async (_, { user, body }, ctx) => {
    const new_post = new ctx.db.Post({
      owner: user,
      body: body
    });
    return await new_post.save();
  }
};
