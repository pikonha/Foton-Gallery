const { GraphQLString } = require("graphql");

const UserType = require("../../types/User");

module.exports = {
  type: UserType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (parent, args, ctx) => {
    const User = await ctx.User.findById(args.id);
  }
};
