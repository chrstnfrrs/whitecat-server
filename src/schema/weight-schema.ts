import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    weight(id: ID!): [Weight!]!
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
`;

export default typeDefs;
