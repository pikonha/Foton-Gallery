"use strict";

const {
  GraphQLID,
  GraphQLString
} = require("graphql");

const PostType = require("../../types/Post");

const UserType = require("../../types/User");

module.exports = {
  type: PostType,
  args: {
    owner: {
      type: GraphQLID
    },
    description: {
      type: GraphQLString
    }
  },
  resolve: (source, args, ctx) => {
    const new_post = new ctx.db.Post({
      owner: args.owner,
      description: args.description
    });
    return new_post.save();
  }
}; // resolve: (parent, _, ctx) => {
//   try {
//     return ctx.db.User(parent.owner);
//   } catch (e) {
//     throw new Error(e);
//   }
// }