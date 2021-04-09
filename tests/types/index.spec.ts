import { gql } from 'apollo-server-express';
import { typeDefs } from '../../src/types/index';
import Hello from '../../src/types/hello';

jest.mock('../../src/types/hello');

const expectedQuery = gql`
  type Query
`;
const expectedHello = Hello as jest.Mocked<typeof Hello>;

describe('Type list', () => {
  test('should be expected type', () => {
    expect(typeDefs).toStrictEqual([expectedQuery, expectedHello]);
  });
});
