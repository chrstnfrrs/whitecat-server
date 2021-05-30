import Chance from 'chance';

import * as Types from '../../src/index.d';

const chance = new Chance();

const createRandomGraphqlError = (graphqlError = {}): Types.GraphqlError => ({
  error: new Error(chance.string()),
  ...graphqlError,
});

export { createRandomGraphqlError };
