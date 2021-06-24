import Chance from 'chance';

import * as ErrorFactories from '../../model-factories/error-model-factories';
import * as ErrorUtils from '../../../src/utils/error-utils';
import * as WeightFactories from '../../model-factories/weight-model-factories';
import * as WeightResolvers from '../../../src/resolvers/weight-resolvers';
import * as WeightServices from '../../../src/services/weight-services';
import { IContext, Weight, GraphqlError, Uuid } from '../../../src/index.d';

jest.mock('../../../src/utils/error-utils');
jest.mock('../../../src/services/weight-services');

const {
  create: createService,
  del: delService,
  getById: getByIdService,
  getByUserId: getByUserIdService,
  getWhere: getWhereService,
  update: updateService,
} = WeightServices as jest.Mocked<typeof WeightServices>;
const { createGraphqlError } = ErrorUtils as jest.Mocked<typeof ErrorUtils>;

const chance = new Chance();

describe('Given a set of weight resolvers', () => {
  let context: IContext,
    id: Uuid,
    userId: Uuid,
    where: Weight.Where,
    input: Weight.Input;

  beforeEach(() => {
    context = {};
  });

  afterEach(jest.resetAllMocks);

  describe('When creating a Weight', () => {
    let root: null, args: Weight.ArgsCreate;

    beforeEach(() => {
      input = WeightFactories.createRandomWeightInput();
      args = {
        input,
      };
    });

    describe('When successful', () => {
      let expectedWeight: Weight.Weight, weight: Weight.Weight;

      beforeEach(async () => {
        expectedWeight = WeightFactories.createRandomWeight();
        createService.mockResolvedValue(expectedWeight);

        weight = await WeightResolvers.create(root, args, context);
      });
      test('Then should create a weight', () => {
        expect(createService).toHaveBeenCalledTimes(1);
        expect(createService).toHaveBeenCalledWith(input);
      });
      test('Then should return a weight', () => {
        expect(weight).toStrictEqual(expectedWeight);
      });
    });
    describe('When unsuccessful', () => {
      let expectedError: GraphqlError, creationError: Error, actualError: Error;

      beforeEach(async () => {
        creationError = new Error(chance.string());
        createService.mockRejectedValue(creationError);

        expectedError = ErrorFactories.createRandomGraphqlError();
        createGraphqlError.mockReturnValue(expectedError);

        try {
          await WeightResolvers.create(root, args, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to create a weight', () => {
        expect(createService).toHaveBeenCalledTimes(1);
        expect(createService).toHaveBeenCalledWith(input);
      });
      test('Then should create a graphql error', () => {
        expect(createGraphqlError).toHaveBeenCalledTimes(1);
        expect(createGraphqlError).toHaveBeenCalledWith(creationError);
      });
      test('Then should return an error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
  describe('When deleting a weight', () => {
    let root: null, args: Weight.ArgsDel;

    beforeEach(() => {
      id = chance.guid();
      args = {
        id,
      };
    });

    describe('When successful', () => {
      let expectedResult: boolean, result: boolean;

      beforeEach(async () => {
        expectedResult = chance.bool();
        delService.mockResolvedValue(expectedResult);

        result = await WeightResolvers.del(root, args, context);
      });
      test('Then should delete a weight', () => {
        expect(delService).toHaveBeenCalledTimes(1);
        expect(delService).toHaveBeenCalledWith(id);
      });
      test('Then should return deletion status', () => {
        expect(result).toStrictEqual(expectedResult);
      });
    });
    describe('When unsuccessful', () => {
      let expectedError: GraphqlError, creationError: Error, actualError: Error;

      beforeEach(async () => {
        creationError = new Error(chance.string());
        delService.mockRejectedValue(creationError);

        expectedError = ErrorFactories.createRandomGraphqlError();
        createGraphqlError.mockReturnValue(expectedError);

        try {
          await WeightResolvers.del(root, args, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to delete a Weight', () => {
        expect(delService).toHaveBeenCalledTimes(1);
        expect(delService).toHaveBeenCalledWith(id);
      });
      test('Then should create a graphql error', () => {
        expect(createGraphqlError).toHaveBeenCalledTimes(1);
        expect(createGraphqlError).toHaveBeenCalledWith(creationError);
      });
      test('Then should return an error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
  describe('When getting a weight by id', () => {
    let root: null, args: Weight.ArgsGetById;

    beforeEach(() => {
      id = chance.guid();
      args = {
        id,
      };
    });

    describe('When successful', () => {
      let expectedResult: Weight.Weight, result: Weight.Weight;

      beforeEach(async () => {
        expectedResult = WeightFactories.createRandomWeight();
        getByIdService.mockResolvedValue(expectedResult);

        result = (await WeightResolvers.getById(
          root,
          args,
          context,
        )) as Weight.Weight;
      });
      test('Then should get a weight', () => {
        expect(getByIdService).toHaveBeenCalledTimes(1);
        expect(getByIdService).toHaveBeenCalledWith(id);
      });
      test('Then should return a weight', () => {
        expect(result).toStrictEqual(expectedResult);
      });
    });
    describe('When unsuccessful', () => {
      let expectedError: GraphqlError, creationError: Error, actualError: Error;

      beforeEach(async () => {
        creationError = new Error(chance.string());
        getByIdService.mockRejectedValue(creationError);

        expectedError = ErrorFactories.createRandomGraphqlError();
        createGraphqlError.mockReturnValue(expectedError);

        try {
          await WeightResolvers.getById(root, args, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to get a weight', () => {
        expect(getByIdService).toHaveBeenCalledTimes(1);
        expect(getByIdService).toHaveBeenCalledWith(id);
      });
      test('Then should create a graphql error', () => {
        expect(createGraphqlError).toHaveBeenCalledTimes(1);
        expect(createGraphqlError).toHaveBeenCalledWith(creationError);
      });
      test('Then should return an error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
  describe('When getting Weights by id on root', () => {
    let root: Weight.RootGetByUserID, args: null;

    beforeEach(() => {
      userId = chance.guid();
      root = {
        id: userId,
      };
    });

    describe('When successful', () => {
      let expectedResult: Weight.Weight[], result: Weight.Weight[];

      beforeEach(async () => {
        expectedResult = [WeightFactories.createRandomWeight()];
        getByUserIdService.mockResolvedValue(expectedResult);

        result = await WeightResolvers.getByUserId(root, args, context);
      });
      test('Then should get a Weight', () => {
        expect(getByUserIdService).toHaveBeenCalledTimes(1);
        expect(getByUserIdService).toHaveBeenCalledWith(userId);
      });
      test('Then should return Weights', () => {
        expect(result).toStrictEqual(expectedResult);
      });
    });
    describe('When unsuccessful', () => {
      let expectedError: GraphqlError, creationError: Error, actualError: Error;

      beforeEach(async () => {
        creationError = new Error(chance.string());
        getByUserIdService.mockRejectedValue(creationError);

        expectedError = ErrorFactories.createRandomGraphqlError();
        createGraphqlError.mockReturnValue(expectedError);

        try {
          await WeightResolvers.getByUserId(root, args, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to get a Weight', () => {
        expect(getByUserIdService).toHaveBeenCalledTimes(1);
        expect(getByUserIdService).toHaveBeenCalledWith(userId);
      });
      test('Then should create a graphql error', () => {
        expect(createGraphqlError).toHaveBeenCalledTimes(1);
        expect(createGraphqlError).toHaveBeenCalledWith(creationError);
      });
      test('Then should return an error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
  describe('When getting a Weight where x', () => {
    let root: null, args: Weight.ArgsWhere;

    beforeEach(() => {
      where = WeightFactories.createRandomWeightWhere();
      args = {
        where,
      };
    });

    describe('When successful', () => {
      let expectedResult: Weight.Weight[], result: Weight.Weight[];

      beforeEach(async () => {
        expectedResult = chance.n(
          WeightFactories.createRandomWeight,
          chance.d6(),
        );
        getWhereService.mockResolvedValue(expectedResult);

        result = await WeightResolvers.getWhere(root, args, context);
      });
      test('Then should get Weights', () => {
        expect(getWhereService).toHaveBeenCalledTimes(1);
        expect(getWhereService).toHaveBeenCalledWith(where);
      });
      test('Then should return Weights', () => {
        expect(result).toStrictEqual(expectedResult);
      });
    });
    describe('When unsuccessful', () => {
      let expectedError: GraphqlError, creationError: Error, actualError: Error;

      beforeEach(async () => {
        creationError = new Error(chance.string());
        getWhereService.mockRejectedValue(creationError);

        expectedError = ErrorFactories.createRandomGraphqlError();
        createGraphqlError.mockReturnValue(expectedError);

        try {
          await WeightResolvers.getWhere(root, args, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to get Weights', () => {
        expect(getWhereService).toHaveBeenCalledTimes(1);
        expect(getWhereService).toHaveBeenCalledWith(where);
      });
      test('Then should create a graphql error', () => {
        expect(createGraphqlError).toHaveBeenCalledTimes(1);
        expect(createGraphqlError).toHaveBeenCalledWith(creationError);
      });
      test('Then should return an error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
  describe('When updating a Weight', () => {
    let root: null, args: Weight.ArgsUpdate, update: Weight.Update;

    beforeEach(() => {
      id = chance.guid();
      update = WeightFactories.createRandomWeightUpdate();
      args = {
        id,
        input: update,
      };
    });

    describe('When successful', () => {
      let expectedWeight: Weight.Weight, weight: Weight.Weight;

      beforeEach(async () => {
        expectedWeight = WeightFactories.createRandomWeight();
        updateService.mockResolvedValue(expectedWeight);

        weight = await WeightResolvers.update(root, args, context);
      });
      test('Then should update a Weight', () => {
        expect(updateService).toHaveBeenCalledTimes(1);
        expect(updateService).toHaveBeenCalledWith(id, update);
      });
      test('Then should return a Weight', () => {
        expect(weight).toStrictEqual(expectedWeight);
      });
    });
    describe('When unsuccessful', () => {
      let expectedError: GraphqlError, creationError: Error, actualError: Error;

      beforeEach(async () => {
        creationError = new Error(chance.string());
        updateService.mockRejectedValue(creationError);

        expectedError = ErrorFactories.createRandomGraphqlError();
        createGraphqlError.mockReturnValue(expectedError);

        try {
          await WeightResolvers.update(root, args, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to update a Weight', () => {
        expect(updateService).toHaveBeenCalledTimes(1);
        expect(updateService).toHaveBeenCalledWith(id, update);
      });
      test('Then should create a graphql error', () => {
        expect(createGraphqlError).toHaveBeenCalledTimes(1);
        expect(createGraphqlError).toHaveBeenCalledWith(creationError);
      });
      test('Then should return an error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });
});
