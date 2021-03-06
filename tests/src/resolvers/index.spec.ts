import { resolvers } from '../../../src/resolvers';
import * as UserResolvers from '../../../src/resolvers/user-resolvers';
import * as WeightResolvers from '../../../src/resolvers/weight-resolvers';
import * as ScalarTypes from '../../../src/resolvers/scalar-resolvers';

jest.mock('../../../src/resolvers/user-resolvers');
jest.mock('../../../src/resolvers/weight-resolvers');
jest.mock('../../../src/resolvers/scalar-resolvers');

const {
  create: createUser,
  del: deleteUser,
  update: updateUser,
  getById: user,
  getWhere: users,
} = UserResolvers as jest.Mocked<typeof UserResolvers>;
const {
  create: createWeight,
  del: deleteWeight,
  getById: weight,
  getWhere: weights,
  getByUserId: getWeightByUserId,
  update: updateWeight,
} = WeightResolvers as jest.Mocked<typeof WeightResolvers>;
const { DateTime } = ScalarTypes as jest.Mocked<typeof ScalarTypes>;

describe('Resolver Map', () => {
  test('should have expected fields', () => {
    expect(JSON.stringify(resolvers)).toStrictEqual(
      JSON.stringify({
        Date: DateTime,
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
      }),
    );
  });
  test('hello should return hello', () => {
    expect(resolvers.Query.hello()).toStrictEqual('Hello');
  });
});
