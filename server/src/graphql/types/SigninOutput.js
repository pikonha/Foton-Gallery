import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean
} from "graphql";

module.exports = new GraphQLObjectType({
  name: "SigninOutput",
  fields: () => ({
    success: { type: new GraphQLNonNull(GraphQLBoolean) },
    content: { type: GraphQLString }
  })
});
