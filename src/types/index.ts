import { gql } from 'apollo-server-express';

import Hello from './hello';

const Query = gql`
  type Query
`;

const typeDefs = [Query, Hello];

export { typeDefs };
