"use strict";

const {
  GraphQLSchema
} = require("graphql");

module.exports = new GraphQLSchema({
  query: require("./queries"),
  mutation: require("./mutations")
});