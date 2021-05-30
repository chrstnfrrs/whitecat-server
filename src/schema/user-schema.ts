import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    user(id: ID!): User
    users(where: UserWhere): [User]!
  }

  extend type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, input: UserUpdate!): User!
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
  }

  input UserUpdate {
    email: String
    firstName: String
    lastName: String
  }

  input UserWhere {
    email: String
    firstName: String
    lastName: String
  }
`;

export default typeDefs;
