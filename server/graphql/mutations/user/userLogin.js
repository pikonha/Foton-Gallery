const { GraphQLString } = require("graphql");

const UserType = require("../../types/User");
const auth = require("../../../auth");

module.exports = {
  type: UserType,
  description: "User login.",
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (parent, args, ctx) => {
    const user = await ctx.db.User.findOne({
      username: args.username
    });

    if (user) {
      if (user.password !== args.password) {
        throw new Error("Invalid password.");
      }

      // Injects the token to the user that will be passed thorough context
      user.authToken = await auth.generateToken({
        _id: user._id,
        username: user.username,
        sub: await ctx.db.User.countDocuments()
      });

      // Allow graphiql to access as a validated user
      ctx.cookies.set("token", user.authToken);

      return user;
    }

    throw new Error("Username not found.");
  }
};
