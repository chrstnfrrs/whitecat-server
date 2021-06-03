import Chance from 'chance';

import { Weight } from '../../src/index.d';

const chance = new Chance();

const createRandomWeight = (weight = {}): Weight.Weight => ({
  date: chance.date(),
  id: chance.guid(),
  userId: chance.guid(),
  weight: chance.floating({
    fixed: 2,
    max: 400,
    min: 90,
  }),
  ...weight,
});

const createRandomWeightInput = (weight = {}): Weight.Input => ({
  date: chance.date(),
  userId: chance.guid(),
  weight: chance.floating({
    fixed: 2,
    max: 400,
    min: 90,
  }),
  ...weight,
});

const createRandomWeightUpdate = (weight = {}): Weight.Update => ({
  date: chance.date(),
  weight: chance.floating({
    fixed: 2,
    max: 400,
    min: 90,
  }),
  ...weight,
});

const createRandomWeightWhere = (weight = {}): Weight.Where => ({
  date: chance.date(),
  id: chance.guid(),
  userId: chance.guid(),
  weight: chance.floating({
    fixed: 2,
    max: 400,
    min: 90,
  }),
  ...weight,
});

export {
  createRandomWeight,
  createRandomWeightInput,
  createRandomWeightUpdate,
  createRandomWeightWhere,
};
