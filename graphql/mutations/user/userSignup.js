const { GraphQLString, GraphQLNonNull } = require("graphql");

const UserType = require("../../types/User");
const auth = require("../../../auth");

module.exports = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, ctx) => {
    try {
      const user = ctx.db.User(args).save();

      // Injects the token to the user that will be passed thorough context
      user.authToken = await auth.generateToken({
        _id: user._id,
        username: user.username,
        sub: await ctx.db.User.countDocuments()
      });

      // Allow graphiql to access as a validated user
      ctx.cookies.set("token", user.authToken);

      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
};
