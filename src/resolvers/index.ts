import * as UserResolvers from './user-resolvers';

const resolvers = {
  Mutation: {
    createUser: UserResolvers.create,
    deleteUser: UserResolvers.del,
    updateUser: UserResolvers.update,
  },
  Query: {
    hello: (): string => 'Hello',
    user: UserResolvers.getById,
    users: UserResolvers.getWhere,
  },
};

export { resolvers };
