const { GraphQLString, GraphQLNonNull } = require("graphql");

const UserType = require("../../types/User");
const auth = require("../../../auth");

module.exports = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, ctx) => {
    const user = ctx.db.User(args);

    try {
      const savedUser = await user.save();
      savedUser.authToken = await auth.generateToken({
        _id: user._id,
        username: user.username,
        sub: ctx.db.User.count()
      });

      // Allow graphiql to access as a validated user
      ctx.cookie.set("token", savedUser.authToken);

      return savedUser;
    } catch (e) {
      throw new Error(e);
    }
  }
};
