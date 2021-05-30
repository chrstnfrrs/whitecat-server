import {
  create as createUser,
  del as deleteUser,
  update as updateUser,
  getById as user,
  getWhere as users,
} from './user-resolvers';

const resolvers = {
  Mutation: {
    createUser,
    deleteUser,
    updateUser,
  },
  Query: {
    hello: (): string => 'Hello',
    user,
    users,
  },
};

export { resolvers };
