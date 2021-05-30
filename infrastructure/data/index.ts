import * as UserData from './user';

const main = async () => {
  await UserData.createUsers();

  // eslint-disable-next-line unicorn/no-process-exit
  process.exit();
};

main();
