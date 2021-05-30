import Chance from 'chance';

import { User } from '../../src/index.d';

const chance = new Chance();

const createRandomUser = (user = {}): User.User => ({
  email: chance.email(),
  firstName: chance.first(),
  id: chance.guid(),
  lastName: chance.last(),
  ...user,
});

const createRandomUserInput = (user = {}): User.Input | User.UpdateInput => ({
  email: chance.email(),
  firstName: chance.first(),
  lastName: chance.last(),
  ...user,
});

export { createRandomUser, createRandomUserInput };
