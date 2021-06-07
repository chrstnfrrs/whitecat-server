import Chance from 'chance';

import * as PrismaAdapter from '../../../src/adapters/prisma-adapter';
import * as UserServices from '../../../src/services/user-services';
import { AllowAny, User, Uuid } from '../../../src/index.d';
import * as PrismaFactories from '../../model-factories/prisma';
import {
  createRandomUser,
  createRandomUserInput,
} from '../../model-factories/user-model-factories';

jest.mock('../../../src/adapters/prisma-adapter');

const { prisma } = (PrismaAdapter as jest.Mocked<
  typeof PrismaAdapter
>) as AllowAny;

const chance = new Chance();

describe('Given user logic', () => {
  let expectedUser: User.User | null,
    user: User.User | null,
    expectedUserList: User.User[] | [],
    userList: User.User[] | [],
    expectedError: Error,
    actualError: Error,
    input: User.Input,
    id: Uuid;

  beforeEach(() => {
    id = chance.guid();
    input = createRandomUserInput() as User.Input;
    prisma.mockImplementation(() => PrismaFactories.prismaMock);
  });

  afterEach(jest.resetAllMocks);
  describe('When creating a new user', () => {
    let createFn: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedUser = createRandomUser();
        createFn = jest.fn().mockResolvedValue(expectedUser);

        prisma.user.create = createFn;

        user = await UserServices.create(input);
      });
      test('Then should insert a user', () => {
        expect(createFn).toHaveBeenCalledTimes(1);
        expect(createFn).toHaveBeenCalledWith({ data: input });
      });
      test('Then should return user', () => {
        expect(user).toStrictEqual(expectedUser);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedError = new Error('Failed to insert user');
        createFn = jest.fn().mockResolvedValue(null);

        prisma.user.create = createFn;

        try {
          await UserServices.create(input);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should attempt to insert a user', () => {
        expect(prisma.user.create).toHaveBeenCalledTimes(1);
        expect(prisma.user.create).toHaveBeenCalledWith({ data: input });
      });
      test('Then should error', () => {
        expect(actualError).toStrictEqual(expectedError);
      });
    });
  });

  describe('When deleting a user', () => {
    let expectedResult: boolean,
      result: boolean,
      delFn: jest.MockedFunction<typeof jest.fn>;

    beforeEach(async () => {
      expectedResult = chance.bool();
      delFn = jest.fn().mockReturnValue(expectedResult);
      prisma.user.delete = delFn;

      result = await UserServices.del(id);
    });
    test('Then should remove a user', () => {
      expect(delFn).toHaveBeenCalledTimes(1);
      expect(delFn).toHaveBeenCalledWith({ where: { id } });
    });

    test('Then should return whether or not it was successful', () => {
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('When getting a user', () => {
    let getByIdFn: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedUser = createRandomUser();
        getByIdFn = jest.fn().mockResolvedValue(expectedUser);

        prisma.user.findUnique = getByIdFn;

        user = await UserServices.getById(id);
      });
      test('Then should get a user', () => {
        expect(getByIdFn).toHaveBeenCalledTimes(1);
        expect(getByIdFn).toHaveBeenCalledWith({ where: { id } });
      });
      test('Then should return user', () => {
        expect(user).toStrictEqual(expectedUser);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedUser = null;
        getByIdFn = jest.fn().mockResolvedValue(expectedUser);

        prisma.user.findUnique = getByIdFn;

        user = await UserServices.getById(id);
      });
      test('Then should get a user', () => {
        expect(getByIdFn).toHaveBeenCalledTimes(1);
        expect(getByIdFn).toHaveBeenCalledWith({ where: { id } });
      });
      test('Then should return null', () => {
        expect(user).toStrictEqual(expectedUser);
      });
    });
  });

  describe("When getting user's where x", () => {
    let getWhere: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedUserList = chance.n(createRandomUser, chance.d6());
        getWhere = jest.fn().mockResolvedValue(expectedUserList);

        prisma.user.findMany = getWhere;

        userList = await UserServices.getWhere(input);
      });
      test('Then should get a list of users', () => {
        expect(getWhere).toHaveBeenCalledTimes(1);
        expect(getWhere).toHaveBeenCalledWith({ where: input });
      });
      test('Then should return user', () => {
        expect(userList).toStrictEqual(expectedUserList);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedUserList = [];
        getWhere = jest.fn().mockResolvedValue(expectedUserList);

        prisma.user.findMany = getWhere;

        userList = await UserServices.getWhere(input);
      });
      test('Then should get a user', () => {
        expect(getWhere).toHaveBeenCalledTimes(1);
        expect(getWhere).toHaveBeenCalledWith({ where: input });
      });
      test('Then should return null', () => {
        expect(userList).toStrictEqual(expectedUserList);
      });
    });
  });

  describe('When updating a new user', () => {
    let updateFn: jest.MockedFunction<typeof jest.fn>;

    describe('When successful', () => {
      beforeEach(async () => {
        expectedUser = createRandomUser();
        updateFn = jest.fn().mockResolvedValue(expectedUser);

        prisma.user.update = updateFn;

        user = await UserServices.update(id, input);
      });
      test('Then should update a user', () => {
        expect(updateFn).toHaveBeenCalledTimes(1);
        expect(updateFn).toHaveBeenCalledWith({
          data: input,
          where: { id },
        });
      });
      test('Then should return user', () => {
        expect(user).toStrictEqual(expectedUser);
      });
    });
    describe('When unsuccessful', () => {
      beforeEach(async () => {
        expectedError = new Error('Failed to update user');
        updateFn = jest.fn().mockResolvedValue(null);

        prisma.user.update = updateFn;

        try {
          await UserServices.update(id, input);
        } catch (error) {
          actualError = error;
        }
      });
      test('Then should attempt to update a user', () => {
        expect(prisma.user.update).toHaveBeenCalledTimes(1);
        expect(prisma.user.update).toHaveBeenCalledWith({
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
