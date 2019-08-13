const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "User",
  description: 'User entity',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    authToken: { type: GraphQLString }
  })
});
