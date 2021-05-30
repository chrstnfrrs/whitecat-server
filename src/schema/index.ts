import { gql } from 'apollo-server';

import HelloSchema from './hello-schema';
import UserSchema from './user-schema';

const Query = gql`
  type Query
`;
const Mutation = gql`
  type Mutation
`;

const typeDefs = [Query, Mutation, HelloSchema, UserSchema];

export { typeDefs };
