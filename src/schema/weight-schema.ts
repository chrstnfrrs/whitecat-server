import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    weight(id: ID!): Weight
    weights(where: WeightWhere!): [Weight!]!
  }

  extend type Mutation {
    createWeight(input: WeightInput!): Weight!
    updateWeight(id: ID!, input: WeightUpdate!): Weight!
    deleteWeight(id: ID!): Boolean!
  }

  type Weight {
    id: ID!
    weight: Float!
    date: Date!
    userId: ID!
  }

  input WeightInput {
    userId: ID!
    weight: Float!
    date: Date
  }

  input WeightUpdate {
    weight: Float
    date: Date
  }

  input WeightWhere {
    userId: ID!
    id: ID
    weight: Float
    date: Date
  }
`;

export default typeDefs;
