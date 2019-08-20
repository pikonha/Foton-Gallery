import GraphQLEmail from "graphql-type-email";
import { GraphQLString, GraphQLNonNull } from "graphql";

import UserType from "../../types/User";

module.exports = {
  type: UserType,
  description: "Register a new user.",
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLEmail) }
  },
  resolve: async (_, args, ctx) => {
    let user = await ctx.db.User.findOne({
      email: args.email
    });

    if (user) {
      throw new Error("Email already registered.");
    }

    return ctx.db.User(args).save();
  }
};
