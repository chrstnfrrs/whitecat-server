import Chance from 'chance';

import * as Types from '../../../src/index.d';
import * as WeightModels from '../../../src/models/weight';
import * as WeightFactory from '../../model-factories/weight-model-factories';

const chance = new Chance();

describe('Given a weight model', () => {
  describe('When mapping a weight list from database to weight list for graphql', () => {
    let result: Types.Weight.Weight[], expectedWeights: Types.Weight.Weight[];

    beforeEach(() => {
      const weights = chance.n(WeightFactory.createRandomWeight, chance.d6());

      expectedWeights = weights;

      result = WeightModels.mapToCollection(weights);
    });

    test('Then should return expected list', () => {
      expect(result).toStrictEqual(expectedWeights);
    });
  });
});
