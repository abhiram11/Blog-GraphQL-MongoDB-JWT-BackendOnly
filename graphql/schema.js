const { GraphQLSchema, GraphQLObjectType } = require("graphql");

//import queries and mutations
const {} = require("./queries");
const {} = require("./mutation");

//define and import QueryType from queries.js
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {},
});

//define and import MutationType from mutation.js
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {},
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
