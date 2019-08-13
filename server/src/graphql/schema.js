import { GraphQLSchema } from "graphql";

module.exports = new GraphQLSchema({
  query: require("./queries"),
  mutation: require("./mutations")
});
