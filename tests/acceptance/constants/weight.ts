import { USER_UUID } from './user';

const WEIGHT_USER_UUID = '539810cd-5965-4512-88bd-daf2cc505c1a';
const WEIGHT_USER = {
  email: 'weight_user@whitecat.com',
  firstName: 'Christian',
  id: WEIGHT_USER_UUID,
  lastName: 'Farris',
};
const WEIGHT_USERS = [WEIGHT_USER];
const DELETE_WEIGHT_UUID = 'cab7c4af-3702-4b63-8254-1ba2863a01d5';
const DELETE_WEIGHT = {
  date: '2099-06-12T11:50:28.711Z',
  id: DELETE_WEIGHT_UUID,
  userId: USER_UUID,
  weight: 214.28,
};
const WEIGHT_UUID = 'ed828391-0c34-4766-b853-8e40cf584990';
const WEIGHT = {
  date: '2011-11-11T11:11:11.711Z',
  id: WEIGHT_UUID,
  userId: USER_UUID,
  weight: 193.53,
};
const WEIGHTS = [WEIGHT, DELETE_WEIGHT];

export {
  USER_UUID,
  DELETE_WEIGHT_UUID,
  DELETE_WEIGHT,
  WEIGHT,
  WEIGHTS,
  WEIGHT_UUID,
  WEIGHT_USER_UUID,
  WEIGHT_USER,
  WEIGHT_USERS,
};
