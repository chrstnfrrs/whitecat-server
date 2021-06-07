import { request, gql } from 'graphql-request';

import * as Types from '../../../src/index.d';
import * as Constants from '../constants/user';
import * as UserFactory from '../../model-factories/user-model-factories';

describe('Given the User Model', () => {
  let currentUser: Types.User.User,
    currentUsers: Types.User.User[],
    success: boolean;

  beforeAll(() => {
    return;
  });

  describe('When creating user', () => {
    let newUser: Types.User.Input;

    beforeEach(async () => {
      newUser = UserFactory.createRandomUserInput() as Types.User.Input;
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation CreateUser($input: UserInput!) {
            createUser(input: $input) {
              id
              firstName
              lastName
              email
            }
          }
        `,
        { input: newUser },
      );

      currentUser = data.createUser;
    });

    afterEach(async () => {
      await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation DeleteUser($id: ID!) {
            deleteUser(id: $id)
          }
        `,
        { id: currentUser.id },
      );
    });

    test('Then create the expected user', () => {
      expect(currentUser).toMatchObject(newUser);
    });
  });
  describe('When querying for user', () => {
    beforeEach(async () => {
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          query User($id: ID!) {
            user(id: $id) {
              id
              firstName
              lastName
              email
            }
          }
        `,
        { id: Constants.USER_UUID },
      );

      currentUser = data.user;
    });

    test('Then find the expected user', () => {
      expect(currentUser).toStrictEqual(Constants.USER);
    });
  });
  describe('When querying for users', () => {
    beforeEach(async () => {
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          query Users {
            users {
              id
              firstName
              lastName
              email
            }
          }
        `,
      );

      currentUsers = data.users;
    });

    test('Then create the expected users', () => {
      expect(currentUsers).toStrictEqual(Constants.USERS);
    });
  });
  describe('When updating a user', () => {
    let newUser: Types.User.Update;

    beforeEach(async () => {
      newUser = UserFactory.createRandomUserInput() as Types.User.Update;
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation UpdateUser($id: ID!, $input: UserUpdate!) {
            updateUser(id: $id, input: $input) {
              id
              firstName
              lastName
              email
            }
          }
        `,
        {
          id: Constants.USER_UUID,
          input: newUser,
        },
      );

      currentUser = data.updateUser;
    });

    test('Then should update to be the expected user', () => {
      expect(currentUser).toMatchObject(newUser);
    });
  });
  describe('When deleting a user', () => {
    beforeEach(async () => {
      const data: Types.AllowAny = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          mutation deleteUser($id: ID!) {
            deleteUser(id: $id)
          }
        `,
        { id: Constants.USER_UUID },
      );

      success = data.deleteUser;
    });

    test('Then delete the user', () => {
      expect(success).toStrictEqual(true);
    });
  });
});
