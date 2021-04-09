import { gql } from 'apollo-server-express';

const helloTypes = gql`
  extend type Query {
    hello: String!
  }
`;

export default helloTypes;
