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
    const user = await ctx.User.findById(args.id);

    user.username = args.username || user.username;
    user.username = args.password || user.password;
    user.username = args.firstName || user.firstName;
    user.username = args.lastName || user.lastName;

    try {
      return user.save();
    } catch (e) {
      throw new Error(e);
    }
  }
};
