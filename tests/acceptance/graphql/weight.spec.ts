import { request, gql } from 'graphql-request';

import * as Types from '../../../src/index.d';
import * as WeightConstants from '../constants/weight';

describe('Given the Weight Model', () => {
  let currentWeight: Types.AllowAny;

  describe('When creating weight', () => {
    let newWeight: Types.AllowAny;

    beforeEach(async () => {
      newWeight = WeightConstants.DELETE_WEIGHT;

      delete newWeight.id;

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
  describe('When querying for weight', () => {
    beforeEach(async () => {
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          query Weight($id: ID!) {
            weight(id: $id) {
              id
              weight
              date
              userId
            }
          }
        `,
        {
          id: WeightConstants.WEIGHT_UUID,
        },
      );

      currentWeight = data.weight;
    });

    test('Then return the expected weight', () => {
      expect(currentWeight).toMatchObject(WeightConstants.WEIGHT);
    });
  });
  describe('When querying for weights', () => {
    beforeEach(async () => {
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          query Weights($userId: ID!) {
            weights(where: { userId: $userId }) {
              id
              weight
              date
              userId
            }
          }
        `,
        {
          userId: WeightConstants.USER_UUID,
        },
      );

      currentWeight = data.weights;
    });

    test('Then return the expected weights', () => {
      expect(currentWeight).toContainEqual(WeightConstants.WEIGHT);
    });
  });
  describe('When updating a weight', () => {
    let weight: number;

    beforeEach(async () => {
      weight = 99.99;

      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation UpdateWeight($id: ID!, $weight: Float!) {
            updateWeight(id: $id, input: { weight: $weight }) {
              id
              weight
              date
              userId
            }
          }
        `,
        {
          id: WeightConstants.WEIGHT_UUID,
          weight,
        },
      );

      currentWeight = data.updateWeight;
    });

    test('Then return the expected weight', () => {
      expect(currentWeight.weight).toStrictEqual(weight);
    });
  });
  describe('When deleting a weight', () => {
    beforeEach(async () => {
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation DeleteWeight($id: ID!) {
            deleteWeight(id: $id)
          }
        `,
        {
          id: WeightConstants.DELETE_WEIGHT_UUID,
        },
      );

      currentWeight = data.deleteWeight;
    });

    test('Then return the weight was deleted', () => {
      expect(currentWeight).toStrictEqual(true);
    });
  });
});
