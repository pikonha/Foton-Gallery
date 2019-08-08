const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) }
  })
});
