import { request, gql } from 'graphql-request';

import * as Types from '../../../src/index.d';
import * as WeightConstants from '../constants/weight';
import * as WeightFactory from '../../model-factories/weight-model-factories';

describe('Given the Weight Model', () => {
  let currentWeight: Types.AllowAny;

  describe('When creating weight', () => {
    let newWeight: Types.Weight.Input;

    beforeEach(async () => {
      newWeight = WeightFactory.createRandomWeightInput({
        userId: WeightConstants.WEIGHT_USER_UUID,
      });

      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation CreateWeight($input: WeightInput!) {
            createWeight(input: $input) {
              id
              date
              weight
              userId
            }
          }
        `,
        {
          input: newWeight,
        },
      );

      currentWeight = data.createWeight;
    });

    afterEach(async () => {
      await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation DeleteWeight($id: ID!) {
            deleteWeight(id: $id)
          }
        `,
        { id: currentWeight.id },
      );
    });

    test('Then create the expected weight', () => {
      expect(currentWeight).toMatchObject(newWeight);
    });
  });
  // describe('When creating a weight', () => {});
  // describe('When querying a specific weight', () => {});
  // describe('When querying for weights', () => {});
  // describe('When updating a weight', () => {});
  // describe('When deleting a weight', () => {});
  test('should be true', () => {
    expect(true).toStrictEqual(true);
  });
});
