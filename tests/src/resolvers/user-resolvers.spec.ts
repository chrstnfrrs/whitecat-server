import Chance from 'chance';

import * as ErrorFactories from '../../model-factories/error-model-factories';
import * as ErrorUtils from '../../../src/utils/error-utils';
import * as UserFactories from '../../model-factories/user-model-factories';
import * as UserResolvers from '../../../src/resolvers/user-resolvers';
import * as UserServices from '../../../src/services/user-services';
import { IContext, User, GraphqlError, Uuid } from '../../../src/index.d';

jest.mock('../../../src/utils/error-utils');
jest.mock('../../../src/services/user-services');

const {
  create: createService,
  del: delService,
  getById: getByIdService,
  getWhere: getWhereService,
  update: updateService,
} = UserServices as jest.Mocked<typeof UserServices>;
const { createGraphqlError } = ErrorUtils as jest.Mocked<typeof ErrorUtils>;

const chance = new Chance();

describe('Given a set of user resolvers', () => {
  let context: IContext,
    args: User.Args,
    input: User.Input | User.UpdateInput,
    id: Uuid,
    where: User.Where;

  beforeEach(() => {
    context = {};
  });

  afterEach(jest.resetAllMocks);

  describe('When creating a user', () => {
    let root: null;

    beforeEach(() => {
      input = UserFactories.createRandomUserInput();
      args = {
        input,
      };
    });

    describe('When successful', () => {
      let expectedUser: User.User, user: User.User;

      beforeEach(async () => {
        expectedUser = UserFactories.createRandomUser();
        createService.mockResolvedValue(expectedUser);

        user = await UserResolvers.create(
          root,
          args as User.CreateArgs,
          context,
        );
      });
      test('Then should create a user', () => {
        expect(createService).toHaveBeenCalledTimes(1);
        expect(createService).toHaveBeenCalledWith(input);
      });
      test('Then should return a user', () => {
        expect(user).toStrictEqual(expectedUser);
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
          await UserResolvers.create(root, args as User.CreateArgs, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to create a user', () => {
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
  describe('When deleting a user', () => {
    let root: null;

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

        result = await UserResolvers.del(root, args as User.DelArgs, context);
      });
      test('Then should delete a user', () => {
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
          await UserResolvers.del(root, args as User.DelArgs, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to delete a user', () => {
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
  describe('When getting a user by id', () => {
    let root: null;

    beforeEach(() => {
      id = chance.guid();
      args = {
        id,
      };
    });

    describe('When successful', () => {
      let expectedResult: User.User, result: User.User;

      beforeEach(async () => {
        expectedResult = UserFactories.createRandomUser();
        getByIdService.mockResolvedValue(expectedResult);

        result = await UserResolvers.getById(
          root,
          args as User.GetByIdArgs,
          context,
        );
      });
      test('Then should get a user', () => {
        expect(getByIdService).toHaveBeenCalledTimes(1);
        expect(getByIdService).toHaveBeenCalledWith(id);
      });
      test('Then should return a user', () => {
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
          await UserResolvers.getById(root, args as User.GetByIdArgs, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to get a user', () => {
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
  describe('When getting a user where x', () => {
    let root: null;

    beforeEach(() => {
      where = UserFactories.createRandomUserInput();
      args = {
        where,
      };
    });

    describe('When successful', () => {
      let expectedResult: User.User[], result: User.User[];

      beforeEach(async () => {
        expectedResult = chance.n(UserFactories.createRandomUser, chance.d6());
        getWhereService.mockResolvedValue(expectedResult);

        result = await UserResolvers.getWhere(
          root,
          args as User.GetWhereArgs,
          context,
        );
      });
      test('Then should get users', () => {
        expect(getWhereService).toHaveBeenCalledTimes(1);
        expect(getWhereService).toHaveBeenCalledWith(where);
      });
      test('Then should return users', () => {
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
          await UserResolvers.getWhere(
            root,
            args as User.GetWhereArgs,
            context,
          );
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to get users', () => {
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
  describe('When updating a user', () => {
    let root: null;

    beforeEach(() => {
      id = chance.guid();
      input = UserFactories.createRandomUserInput() as User.UpdateInput;
      args = {
        id,
        input,
      };
    });

    describe('When successful', () => {
      let expectedUser: User.User, user: User.User;

      beforeEach(async () => {
        expectedUser = UserFactories.createRandomUser();
        updateService.mockResolvedValue(expectedUser);

        user = await UserResolvers.update(
          root,
          args as User.UpdateArgs,
          context,
        );
      });
      test('Then should update a user', () => {
        expect(updateService).toHaveBeenCalledTimes(1);
        expect(updateService).toHaveBeenCalledWith(id, input);
      });
      test('Then should return a user', () => {
        expect(user).toStrictEqual(expectedUser);
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
          await UserResolvers.update(root, args as User.UpdateArgs, context);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should try to update a user', () => {
        expect(updateService).toHaveBeenCalledTimes(1);
        expect(updateService).toHaveBeenCalledWith(id, input);
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
