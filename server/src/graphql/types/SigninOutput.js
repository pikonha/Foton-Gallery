import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean
} from "graphql";

module.exports = new GraphQLObjectType({
  name: "SigninOutput",
  fields: () => ({
    success: {
      type: new GraphQLNonNull(GraphQLBoolean)
      // resolve: output => {
      //   return output.success;
      // }
    },
    content: { type: GraphQLString }
  })
});
