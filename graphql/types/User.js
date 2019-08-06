const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    username: { type: GraphQLString }
  })
});
