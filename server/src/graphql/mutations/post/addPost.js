import { GraphQLID, GraphQLString } from "graphql";

import PostType from "../../types/Post";

module.exports = {
  type: PostType,
  args: {
    owner: { type: GraphQLID },
    description: { type: GraphQLString }
  },
  resolve: (source, args, ctx) => {
    const new_post = new ctx.db.Post({
      owner: args.owner,
      description: args.description
    });
    return new_post.save();
  }
};
