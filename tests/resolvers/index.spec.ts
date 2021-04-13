import { resolvers } from '../../src/resolvers';
import * as HelloResolvers from '../../src/resolvers/hello-resolvers';

jest.mock('../../src/resolvers/hello-resolvers');

const { helloResolver } = HelloResolvers as jest.Mocked<typeof HelloResolvers>;

describe('Resolver Map', () => {
  test('should have expected fields', () => {
    expect(resolvers).toStrictEqual({
      Query: {
        hello: helloResolver,
      },
    });
  });
});
