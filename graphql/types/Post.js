const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require("graphql");

const UserType = require("../types/User");

module.exports = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    owner: {
      type: UserType,
      resolve: (parent, args, ctx) => {
        return ctx.db.User.findById(parent.owner);
      }
    },
    likes: { type: GraphQLInt },
    created: { type: GraphQLString },
    description: { type: GraphQLString },
    comments: { type: GraphQLList(GraphQLString) }
  })
});
