import { USER_UUID } from './user';

const WEIGHT_USER_UUID = '539810cd-5965-4512-88bd-daf2cc505c1a';
const WEIGHT_USER = {
  email: 'weight_user@whitecat.com',
  firstName: 'Christian',
  id: WEIGHT_USER_UUID,
  lastName: 'Farris',
};
const WEIGHT_USERS = [WEIGHT_USER];
const WEIGHT_UUID = 'cab7c4af-3702-4b63-8254-1ba2863a01d5';
const WEIGHT = {
  date: '2099-06-12T11:50:28.711Z',
  id: WEIGHT_UUID,
  userId: USER_UUID,
  weight: 214.28,
};
const WEIGHTS = [WEIGHT];

export {
  WEIGHT,
  WEIGHTS,
  WEIGHT_UUID,
  WEIGHT_USER_UUID,
  WEIGHT_USER,
  WEIGHT_USERS,
};
