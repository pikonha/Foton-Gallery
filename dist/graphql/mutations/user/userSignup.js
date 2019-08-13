"use strict";

const {
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const UserType = require("../../types/User");

module.exports = {
  type: UserType,
  description: "Register a new user.",
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (parent, args, ctx) => {
    let user = await ctx.db.User.findOne({
      username: args.username
    });

    if (user) {
      throw new Error("Username already in use.");
    }

    user = await ctx.db.User.findOne({
      email: args.email
    });

    if (user) {
      throw new Error("Email already in use.");
    }

    return ctx.db.User(args).save();
  }
};