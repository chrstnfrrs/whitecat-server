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
  getByUserId as getWeightByUserId,
} from './weight-resolvers';

const resolvers = {
  Mutation: {
    createUser,
    createWeight,
    deleteUser,
    updateUser,
  },
  Query: {
    hello: (): string => 'Hello',
    user,
    users,
  },
  User: {
    weights: getWeightByUserId,
  },
  Weight: {
    user: userNested,
  },
};

export { resolvers };
