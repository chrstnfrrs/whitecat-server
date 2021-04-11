import { gql } from 'apollo-server';

const helloTypes = gql`
  extend type Query {
    hello: String!
  }
`;

export default helloTypes;
