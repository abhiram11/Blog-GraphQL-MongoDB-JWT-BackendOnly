const { GraphQLObjectType } = require("graphql");

const { User, Post, Comment } = require("../models");

const UserType = new GraphQLObjectType({
  name: "User",
  description: "User type",
  fields: () => ({
    //returns JSON
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    // we dont return password here
    displayName: { type: GraphQLString },
  }),
});

const Post = new GraphQLObjectType({
  name: "Post",
  description: "Post types",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: GraphQLString,
      //new here, resolver function to hit mongoDB
      resolver(parent, args) {
        return User.findById(parent.authorId);
      },
    },
  }),
});
