import {
  create as createUser,
  del as deleteUser,
  update as updateUser,
  getById as user,
  getByIdRoot as userNested,
  getWhere as users,
} from './user-resolvers';
import {
  create as createWeight,
  del as deleteWeight,
  getById as weight,
  getWhere as weights,
  getByUserId as getWeightByUserId,
  update as updateWeight,
} from './weight-resolvers';
import * as ScalarTypes from './scalar-resolvers';

const resolvers = {
  Date: ScalarTypes.DateTime,
  Mutation: {
    createUser,
    createWeight,
    deleteUser,
    deleteWeight,
    updateUser,
    updateWeight,
  },
  Query: {
    hello: (): string => 'Hello',
    user,
    users,
    weight,
    weights,
  },
  User: {
    weights: getWeightByUserId,
  },
  Weight: {
    user: userNested,
  },
};

export { resolvers };
