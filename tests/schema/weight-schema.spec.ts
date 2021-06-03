import { gql } from 'apollo-server';

import WeightSchema from '../../src/schema/weight-schema';

describe('Given the WeightSchema', () => {
  test('Then should be expected type', () => {
    expect(WeightSchema).toStrictEqual(gql`
      extend type Query {
        weights(id: ID!): [Weight!]!
        weights(where: WeightWhere!): [Weight!]!
      }

      extend type Mutation {
        createWeight(input: WeightInput!): Weight!
        updateWeight(id: ID!, input: WeightUpdate!): User!
        deleteWeight(id: ID!): Boolean!
      }

      type Weight {
        id: ID!
        weight: Float!
        date: String!
        user: User!
      }

      input WeightInput {
        userId: ID!
        weight: Float!
        date: String
      }

      input WeightUpdate {
        weight: Float
        date: String
      }

      input WeightWhere {
        id: ID
        userId: ID
        weight: Float
        date: String
      }
    `);
  });
});
