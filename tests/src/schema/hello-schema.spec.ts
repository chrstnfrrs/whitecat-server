import { gql } from 'apollo-server';

import HelloSchema from '../../../src/schema/hello-schema';

describe('Given the HelloSchema', () => {
  test('Then should be expected type', () => {
    expect(HelloSchema).toStrictEqual(gql`
      extend type Query {
        hello: String!
      }
    `);
  });
});
