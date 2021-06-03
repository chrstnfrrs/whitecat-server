import { gql } from 'apollo-server';

import { typeDefs } from '../../src/schema';
import HelloSchema from '../../src/schema/hello-schema';
import UserSchema from '../../src/schema/user-schema';
import WeightSchema from '../../src/schema/weight-schema';

jest.mock('../../src/schema/hello-schema');
jest.mock('../../src/schema/weight-schema');

const expectedQuery = gql`
  type Query
`;
const expectedMutation = gql`
  type Mutation
`;
const expectedHelloSchema = HelloSchema as jest.Mocked<typeof HelloSchema>;
const expectedUserSchema = UserSchema as jest.Mocked<typeof UserSchema>;
const expectedWeightSchema = WeightSchema as jest.Mocked<typeof WeightSchema>;

describe('Given type definition list', () => {
  test('should be as expected', () => {
    expect(typeDefs).toStrictEqual([
      expectedQuery,
      expectedMutation,
      expectedHelloSchema,
      expectedUserSchema,
      expectedWeightSchema,
    ]);
  });
});
