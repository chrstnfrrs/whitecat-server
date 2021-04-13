import { helloResolver } from '../../src/resolvers/hello-resolvers';

describe('hello-resolvers', () => {
  describe('helloResolver', () => {
    test('should say hello world', () => {
      expect(helloResolver()).toStrictEqual('Hello World');
    });
  });
});
