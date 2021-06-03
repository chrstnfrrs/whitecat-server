import Chance from 'chance';

import * as PrismaAdapter from '../../src/adapters/prisma-adapter';
import * as WeightServices from '../../src/services/weight-services';
import { AllowAny, Weight, Uuid } from '../../src/index.d';
import * as PrismaFactories from '../model-factories/prisma';
import * as WeightFactory from '../model-factories/weight-model-factories';

jest.mock('../../src/adapters/prisma-adapter');

const { prisma } = (PrismaAdapter as jest.Mocked<
  typeof PrismaAdapter
>) as AllowAny;

const chance = new Chance();

describe('Given Weight logic', () => {
  let expectedWeight: Weight.Weight | null,
    weight: Weight.Weight | null,
    expectedWeightList: Weight.Weight[] | [],
    weightList: Weight.Weight[] | [],
    expectedError: Error,
    actualError: Error,
    input: Weight.Input | Weight.Update | Weight.Where,
    id: Uuid;

  beforeEach(() => {
    id = chance.guid();
    prisma.mockImplementation(() => PrismaFactories.prismaMock);
  });

  afterEach(jest.resetAllMocks);
  describe('When creating a new Weight', () => {
    let createFn: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedWeight = WeightFactory.createRandomWeight();
        createFn = jest.fn().mockResolvedValue(expectedWeight);
        input = WeightFactory.createRandomWeightInput() as Weight.Input;
        prisma.weight.create = createFn;

        weight = await WeightServices.create(input as Weight.Input);
      });
      test('Then should insert a Weight', () => {
        expect(createFn).toHaveBeenCalledTimes(1);
        expect(createFn).toHaveBeenCalledWith({ data: input });
      });
      test('Then should return Weight', () => {
        expect(weight).toStrictEqual(expectedWeight);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedError = new Error('Failed to insert weight');
        createFn = jest.fn().mockResolvedValue(null);

        prisma.weight.create = createFn;

        try {
          await WeightServices.create(input as Weight.Input);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should attempt to insert a weight', () => {
        expect(prisma.weight.create).toHaveBeenCalledTimes(1);
        expect(prisma.weight.create).toHaveBeenCalledWith({ data: input });
      });
      test('Then should error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });

  describe('When deleting a weight', () => {
    let expectedResult: boolean,
      result: boolean,
      delFn: jest.MockedFunction<typeof jest.fn>;

    beforeEach(async () => {
      expectedResult = chance.bool();
      delFn = jest.fn().mockReturnValue(expectedResult);
      prisma.weight.delete = delFn;

      result = await WeightServices.del(id);
    });
    test('Then should remove a weight', () => {
      expect(delFn).toHaveBeenCalledTimes(1);
      expect(delFn).toHaveBeenCalledWith({ where: { id } });
    });

    test('Then should return whether or not it was successful', () => {
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('When getting a weight', () => {
    let getByIdFn: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedWeight = WeightFactory.createRandomWeight();
        getByIdFn = jest.fn().mockResolvedValue(expectedWeight);

        prisma.weight.findUnique = getByIdFn;

        weight = await WeightServices.getById(id);
      });
      test('Then should get a weight', () => {
        expect(getByIdFn).toHaveBeenCalledTimes(1);
        expect(getByIdFn).toHaveBeenCalledWith({ where: { id } });
      });
      test('Then should return weight', () => {
        expect(weight).toStrictEqual(expectedWeight);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedWeight = null;
        getByIdFn = jest.fn().mockResolvedValue(expectedWeight);

        prisma.weight.findUnique = getByIdFn;

        weight = await WeightServices.getById(id);
      });
      test('Then should get a weight', () => {
        expect(getByIdFn).toHaveBeenCalledTimes(1);
        expect(getByIdFn).toHaveBeenCalledWith({ where: { id } });
      });
      test('Then should return null', () => {
        expect(weight).toStrictEqual(expectedWeight);
      });
    });
  });

  describe("When getting Weight's where x", () => {
    let getWhere: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedWeightList = chance.n(
          WeightFactory.createRandomWeight,
          chance.d6(),
        );
        getWhere = jest.fn().mockResolvedValue(expectedWeightList);
        input = WeightFactory.createRandomWeightWhere() as Weight.Where;
        prisma.weight.findMany = getWhere;

        weightList = await WeightServices.getWhere(input);
      });
      test('Then should get a list of weights', () => {
        expect(getWhere).toHaveBeenCalledTimes(1);
        expect(getWhere).toHaveBeenCalledWith({ where: input });
      });
      test('Then should return weights', () => {
        expect(weightList).toStrictEqual(expectedWeightList);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedWeightList = [];
        getWhere = jest.fn().mockResolvedValue(expectedWeightList);

        prisma.weight.findMany = getWhere;

        weightList = await WeightServices.getWhere(input);
      });
      test('Then should get a weight', () => {
        expect(getWhere).toHaveBeenCalledTimes(1);
        expect(getWhere).toHaveBeenCalledWith({ where: input });
      });
      test('Then should return null', () => {
        expect(weightList).toStrictEqual(expectedWeightList);
      });
    });
  });

  describe('When updating a new Weight', () => {
    let updateFn: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedWeight = WeightFactory.createRandomWeight();
        updateFn = jest.fn().mockResolvedValue(expectedWeight);
        input = WeightFactory.createRandomWeightUpdate() as Weight.Update;

        prisma.weight.update = updateFn;

        weight = await WeightServices.update(id, input);
      });
      test('Then should update a weight', () => {
        expect(updateFn).toHaveBeenCalledTimes(1);
        expect(updateFn).toHaveBeenCalledWith({
          data: input,
          where: { id },
        });
      });
      test('Then should return weight', () => {
        expect(weight).toStrictEqual(expectedWeight);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedError = new Error('Failed to update weight');
        updateFn = jest.fn().mockResolvedValue(null);

        prisma.weight.update = updateFn;

        try {
          await WeightServices.update(id, input);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should attempt to update a weight', () => {
        expect(prisma.weight.update).toHaveBeenCalledTimes(1);
        expect(prisma.weight.update).toHaveBeenCalledWith({
          data: input,
          where: { id },
        });
      });
      test('Then should error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
});
