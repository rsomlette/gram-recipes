const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }

  type Query {
    recipes: [Recipe]
    users: [User]
  }
  type Mutation {
    addRecipe(
      name: String!
      category: String!
      description: String!
      instructions: String!
      author: String!
    ): Recipe
  }
`;

module.exports = typeDefs;
