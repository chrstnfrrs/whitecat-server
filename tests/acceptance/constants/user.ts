const USER_UUID = '21be509d-162b-48f3-9a39-b7b28f66789e';
const USER = {
  email: 'user@whitecat.com',
  firstName: 'Christian',
  id: USER_UUID,
  lastName: 'Farris',
};
const DELETE_USER_UUID = '18b32016-a891-4606-9ae0-a162c88077c6';
const DELETE_USER = {
  email: 'delete_user@whitecat.com',
  firstName: 'Christian',
  id: DELETE_USER_UUID,
  lastName: 'Farris',
};
const USERS = [USER, DELETE_USER];

export { USER, USERS, USER_UUID, DELETE_USER_UUID };
