import { gql } from 'apollo-server';

import HelloTypes from './hello-types';
import UserTypes from './user-types';

const Query = gql`
  type Query
`;
const Mutation = gql`
  type Mutation
`;

const typeDefs = [Query, Mutation, HelloTypes, UserTypes];

export { typeDefs };
