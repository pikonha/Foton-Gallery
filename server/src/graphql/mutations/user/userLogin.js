import { GraphQLString } from "graphql";

import auth from "../../../auth";

module.exports = {
  type: GraphQLString,
  description: "User login.",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (parent, args, ctx) => {
    const user = await ctx.db.User.findOne({
      email: args.email
    });

    if (user) {
      if (user.password !== args.password) {
        throw new Error("Invalid password.");
      }

      const authToken = await auth.generateToken({
        _id: user._id,
        username: user.username,
        sub: await ctx.db.User.countDocuments()
      });

      // Allow graphiql to access as a validated user
      ctx.cookies.set("token", authToken);

      return authToken;
    }

    throw new Error("Invalid email.");
  }
};
