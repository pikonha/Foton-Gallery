const { GraphQLString } = require("graphql");

const Post = require("../../types/Post");

module.exports = {
  type: Post,
  args: {
    owner: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString }
  },
  resolve: (source, args, ctx) => {
    const new_post = new ctx.db.Post({
      owner: args.owner,
      author: args.author,
      description: args.description
    });
    return new_post.save();
  }
};
