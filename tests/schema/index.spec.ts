import { gql } from 'apollo-server';

import { typeDefs } from '../../src/schema';
import HelloSchema from '../../src/schema/hello-schema';
import UserSchema from '../../src/schema/user-schema';

jest.mock('../../src/schema/hello-schema');
jest.mock('../../src/schema/user-schema');

const expectedQuery = gql`
  type Query
`;
const expectedMutation = gql`
  type Mutation
`;
const expectedHelloSchema = HelloSchema as jest.Mocked<typeof HelloSchema>;
const expectedUserSchema = UserSchema as jest.Mocked<typeof UserSchema>;

describe('Given type definition list', () => {
  test('should be as expected', () => {
    expect(typeDefs).toStrictEqual([
      expectedQuery,
      expectedMutation,
      expectedHelloSchema,
      expectedUserSchema,
    ]);
  });
});
