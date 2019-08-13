const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const UserType = require("../types/User");

module.exports = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    owner: {
      type: UserType,
      resolve: (parent, _, ctx) => {
        try {
          return ctx.db.User.findById(parent.owner);
        } catch (e) {
          throw new Error(e);
        }
      }
    },
    body: { type: GraphQLString },
    date: { type: GraphQLString },
    likes: { type: GraphQLInt }
  })
});
