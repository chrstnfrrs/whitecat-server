import { gql } from 'apollo-server';

import HelloSchema from './hello-schema';
import ScalarSchema from './scalar-schema';
import UserSchema from './user-schema';
import WeightSchema from './weight-schema';

const Query = gql`
  type Query
`;
const Mutation = gql`
  type Mutation
`;

const typeDefs = [
  Query,
  Mutation,
  ScalarSchema,
  HelloSchema,
  UserSchema,
  WeightSchema,
];

export { typeDefs };
