import { GraphqlError } from '../../src/index.d';
import * as ErrorUtils from '../../src/utils/error-utils';

describe('Given a set of error utilities', () => {
  describe('When creating a graphql error', () => {
    let error: Error, result: GraphqlError;

    beforeEach(() => {
      result = ErrorUtils.createGraphqlError({ error });
    });

    test('Then should create a new error', () => {
      expect(result).toStrictEqual({
        error,
      });
    });
  });
});
