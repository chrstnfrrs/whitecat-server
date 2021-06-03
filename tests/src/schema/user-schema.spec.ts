import { gql } from 'apollo-server';

import UserSchema from '../../../src/schema/user-schema';

describe('Given the UserSchema', () => {
  test('Then should be expected type', () => {
    expect(UserSchema).toStrictEqual(gql`
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
        weights: [Weight!]!
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
    `);
  });
});
