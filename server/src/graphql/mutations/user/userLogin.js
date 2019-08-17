import { GraphQLString, GraphQLNonNull } from "graphql";
import GraphQLEmail from "graphql-type-email";

import SigninOutput from "../../types/SigninOutput";
import auth from "../../../auth";

module.exports = {
  type: SigninOutput,
  description: "User login.",
  args: {
    email: { type: new GraphQLNonNull(GraphQLEmail) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (_, { email, password }, ctx) => {
    const user = await ctx.db.User.findOne({ email });

    if (user && !ctx.cookie && user.password === password) {
      const authToken = await auth.generateToken({
        _id: user._id,
        username: user.username,
        sub: await ctx.db.User.countDocuments()
      });

      // Allow graphiql to access as a validated user

      return {
        success: true,
        content: authToken
      };
    }

    return {
      success: false,
      content: "Invalid credentials."
    };
  }
};
