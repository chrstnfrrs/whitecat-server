import { gql } from 'apollo-server';

import Hello from '../../src/types/hello';

describe('Hello type', () => {
  test('should be expected type', () => {
    expect(Hello).toStrictEqual(gql`
      extend type Query {
        hello: String!
      }
    `);
  });
});
