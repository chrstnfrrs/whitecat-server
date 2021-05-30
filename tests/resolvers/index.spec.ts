import { resolvers } from '../../src/resolvers';
import * as UserResolvers from '../../src/resolvers/user-resolvers';

jest.mock('../../src/resolvers/user-resolvers');

const {
  create: createUser,
  del: deleteUser,
  update: updateUser,
  getById: user,
  getWhere: users,
} = UserResolvers as jest.Mocked<typeof UserResolvers>;

describe('Resolver Map', () => {
  test('should have expected fields', () => {
    expect(JSON.stringify(resolvers)).toStrictEqual(
      JSON.stringify({
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
      }),
    );
  });
  test('hello should return hello', () => {
    expect(resolvers.Query.hello()).toStrictEqual('Hello');
  });
});
