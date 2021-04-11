import { gql } from 'apollo-server';

import Hello from './hello';

const Query = gql`
  type Query
`;

const typeDefs = [Query, Hello];

export { typeDefs };
