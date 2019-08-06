const { GraphQLString, GraphQLInt, GraphQLList } = require("graphql");

const Post = require("../../types/Post");

module.exports = {
  type: Post,
  args: {
    owner: { type: GraphQLString },
    likes: { type: GraphQLInt },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    comments: { type: GraphQLList(GraphQLString) }
  },
  resolve: (source, args, ctx) => {
    const new_post = new ctx.db.Post({
      owner: args.owner,
      description: args.description
    });
    return new_post.save();
  }
};
